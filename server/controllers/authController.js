const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };
  
exports.addUser = async (req , res)=>{
    try{
        const registeredUser = new User(req.body);
        const existingUser = await User.findOne({email : registeredUser.email})
  

    if(!registeredUser.name){
        res.status(400).json({error: "Please Fill Your Name"})
        console.log("Name Error")
        return;
    }

    else if(!registeredUser.email){
        res.status(400).json({error :"Please Fill Your Email"})
        console.log("Email Error")
        return;
    }

    else if (!registeredUser.phone){
        res.status(400).json({error : "Please Fill Your Phone Number"})
        console.log("Phone Error")
        return;
    }
    else if(!registeredUser.firstpass){
        res.status(400).json({error :"Please Fill Your Password"})
        console.log("Firstpass Error")
        return;
    }
    else if(!registeredUser.secondpass){
        res.status(400).json({error :"Please Fill Your Password"})
        console.log("Secondpass Error")
        return;
    }
    else if(!registeredUser.gender){
        res.status(400).json({error :"Please Choose Your Gender"})
        console.log("Gender Error")
        return;
    }
    else if(registeredUser.firstpass !== registeredUser.secondpass){
        res.status(400).json({error : "Password MisMatch"})
        console.log("Password Error")
        return;
    }
    else if (!validateEmail(registeredUser.email)) {
        res.status(400).json({ error: 'Invalid Email Format' });
        console.log("Email Format Error")
        return;
    }
    else if (registeredUser.name.length <6) {
        res.status(400).json({ error: 'Minimum Username Character length is 6' });
        console.log("Username Format Error")
        return;
    }
    else if (registeredUser.firstpass.length & registeredUser.secondpass.length <6) {
        res.status(400).json({ error: 'Minimum Password  length is 6' });
        console.log("Password Length Error")
        return;
    }

    else if (existingUser) {
        res.status(400).json({ error: 'Email Already Exists' });
        console.log("Email already exists ")
        return;
    }

  await registeredUser.save()
  res.status(201).json({message:"Registeration Succesfully"})
  console.log("User Created Successfully")
}
catch(err){
    res.status(500).json({error : err.message})
    console.log(err)
}
}


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const secret = process.env.JWT_SECRET || "your-secret-key";
    const maxAge = 3600000; // 1 hour
  
    try {
      const user = await User.login(email, password);
      const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: maxAge });
  
      res.cookie('token', token, {
        httpOnly: true,
        path: "/",
        domain: 'localhost',
        expires: new Date(Date.now() + maxAge),
        secure: true,
        sameSite: 'none',
      });
  
      res.status(200).json({ user, token });
    } catch (err) {
      console.error("Login Error:", err);
      res.status(400).json({ error: err.message });
    }
  };
  
exports.logOut = (req, res) => {
try {
    if (req.cookies['token']) {
    res.clearCookie('token', { path: "/" });
    res.status(200).json({ message: "Successfully Logged Out" });
    } else {
    // If no token is present, assume the user is already logged out
    res.status(200).json({ message: "Already logged out" });
    }
} catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ message: "Failed to clear token" });
}
};

exports.getUser = async (req , res) => {
    try {
        const email = req.decodedToken.email;

        if (!email) {
            return res.status(404).json({ error: "User email not provided" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const userData = {email: user.email, name: user.name, gender: user.gender };
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};