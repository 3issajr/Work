const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };
  
  exports.addUser = async (req, res) => {
    try {
        const registeredUser = new User(req.body);
        const existingUser = await User.findOne({ email: registeredUser.email });

        if (!registeredUser.name) {
            throw new Error("Please fill your name");
        }
        if (!registeredUser.email) {
            throw new Error("Please fill your email");
        }
        if (!validateEmail(registeredUser.email)) {
            throw new Error("Invalid email format");
        }
        if (existingUser) {
            throw new Error("Email already exists");
        }
        if (!registeredUser.phone) {
            throw new Error("Please fill your phone number");
        }
        if (!registeredUser.firstpass || !registeredUser.secondpass) {
            throw new Error("Please fill your password");
        }
        if (!registeredUser.gender) {
            throw new Error("Please choose your gender");
        }
        if (registeredUser.firstpass !== registeredUser.secondpass) {
            throw new Error("Password mismatch");
        }
        if (registeredUser.name.length < 6) {
            throw new Error("Minimum username character length is 6");
        }
        if (registeredUser.firstpass.length < 6 || registeredUser.secondpass.length < 6) {
            throw new Error("Minimum password length is 6");
        }

        await registeredUser.save();
        res.status(201).json({ message: "Registration successful" });
        console.log("User created successfully");
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error.message);
    }
};


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
    } 
    else {
        res.status(200).json({ message: "Already logged out" });
    }
} catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ message: "Failed to clear token" });
}
};

exports.getUser = async (req, res) => {
    try {
        const email = req.decodedToken.email;

        if (!email) {
            throw new Error("User email not provided");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const userData = {
            id: user._id,
            email: user.email,
            name: user.name,
            gender: user.gender,
            phone: user.phone
        };

        res.status(200).json(userData);
    } catch (error) {
        res.status(404).json({ error: error.message });
        console.error(error);
    }
};


exports.updateProfile = async (req, res) => {
    try {
        const  { id }  = req.params; 
        const { name, email, gender , phone } = req.body;

        const user = await User.findByIdAndUpdate(id , {name , email , gender , phone}, {new:true});

        if (req.cookies['token']) {
            res.clearCookie('token', { path: "/" });
            res.status(200).json({user,message:"User Updated Succesfully"});
        }
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
