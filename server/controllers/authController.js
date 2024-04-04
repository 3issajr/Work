const User = require('../models/userModel')

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
  res.status(201).json(registeredUser)
  console.log("User Created")
}
catch(err){
    res.status(500).json({error : err.message})
    console.log(err)
}
}

exports.loginUser = async (req ,res)=>{
    const {email , password} = req.body

    try{
     const user = await User.login(email,password)
     res.status(200).json(user)
    }
    catch (err) {
     res.status(400).json({error : err.message})
     console.log("Login Error")
    }
}

exports.logOut =  (req , res) =>{
    try { 
      if(req.cookies['token']){
        res.clearCookie('token' , {path:"/"})
        res.status(200).json({message:"Logged out"})
        console.log("Token Deleted")
      }
    }
    catch (err) {
      res.status(401).json({message : "Failed To Clear"})
    }
  }