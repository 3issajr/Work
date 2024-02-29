const User = require('../Model/userModel')
const jwt = require('jsonwebtoken')


exports.addUsers = async (req , res)=>{
    try{
        const registeredUser = new User(req.body);

        if(!registeredUser.name || !registeredUser.email || !registeredUser.firstpass || !registeredUser.secondpass || !registeredUser.gender){
            res.status(400).json({error :"Empty Field"})
            console.log("Field Error")
            return;
        }
        if(registeredUser.firstpass !== registeredUser.secondpass){
            res.status(400).json({error : "Password MisMatch"})
            console.log("Password Error")
            return;
        }
        await registeredUser.save()
         res.status(201).json(registeredUser)
         console.log("User Created")
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

exports.loginUser = async (req , res)=>{
    const {email , password} = req.body;
    const secret = process.env.JWT_SECRET || "your-secret-key"
    const maxAge = 3600000 //1h
    try{
      const user = await User.login(email,password)
      const token = jwt.sign({id : user._id , name:user.name},secret ,{expiresIn:maxAge});
      console.log(token)

      res.status(200).cookie('token',token,{
        httpOnly: true,
        path : "/",
        domain : 'localhost',
        expires : new Date(Date.now()+900000),
        sameSite : 'none'
      })
      res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error:err.message})
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

  exports.getUser = async (req , res) => {
    try {
      const users = await User.find()
      if(!users){
        res.status(404).json(users)
        console.log("Users not Found")
      }
        res.status(200).json(users)
        console.log(data,"Found")
    }
    catch (err) {
      res.status(500).json({error:err.message})
    }
  }
  