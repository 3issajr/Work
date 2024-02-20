const User = require('../model/userschema')
const Image = require('../model/imageschema')

// Regarding Token
const jwt = require('jsonwebtoken')

// Regarding Image
const multer = require('multer')
const upload = multer({dest : 'uploads/'})


exports.addUser = async (req , res) => {
    
    try {
      const registeredUser =   new User(req.body);
    
      if(!registeredUser.name || !registeredUser.email || !registeredUser.firstpass || !registeredUser.secondpass){
        res.status(400).json({error : "All Fields Are Required"})
        console.log("Field Error")
        return;
      }
      if(registeredUser.firstpass !== registeredUser.secondpass){
        res.status(400).json({error : "Password Mismatch"})
        console.log("Password Error")
        return;
      }
      await registeredUser.save()
        res.status(201).json(registeredUser)
        console.log("User Created")
    }
  
  catch (err) {
    res.status(500).json({error:err.message})
}
} 


exports.loginUser = async (req , res) => {
  const {email , password} = req.body;
  try {
    const user = await User.login(email,password)
    const user2 = await User.find({email})
    
    const secret = process.env.JWT_SECRET || "your-secret-key"
    const maxAge = 3600; // 1 hour
    const createToken = (userId , name) => {
    return jwt.sign({ id: userId , name }, secret , { expiresIn: maxAge });}
    const token = createToken(user2._id, user2.name)
    
    res.cookie("jwt", token ,{
      httpOnly : true, 
      maxAge : maxAge * 1000
    })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({error:err.message})
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


exports.uploadImage = async (req , res)=>{
  const image = await new Image();
  image.img.data = req.file.buffer;
  image.img.contentType = req.file.mimetype;
  image.name = req.file.originalname;
  image.desc = "An uploaded image"

  image.save()
  .then(result=>{
    res.status(200).json("Success")
    console.log("Saved")
  })
  .catch(err=>{
    res.statua(400).json("Failed")
    console.log("Not Saved")
  })
}
