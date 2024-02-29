const jwt = require('jsonwebtoken')

requireAuth =  (req , res , next) => {
    const secret = process.env.JWT_SECRET || "your-secret-key"
    const token = req.cookies.token
    console.log(token)

        jwt.verify(token, secret , (err, decodedToken)=>{
           if (err) {
            res.status(400).json({error : err.message})
               console.log ("Token Error")
            }
           else {
               console.log(decodedToken)
               console.log("Token Found")
               next()
           }
        });

     } 


module.exports = { requireAuth }
