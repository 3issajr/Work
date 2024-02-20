const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'your-jwt-key'

requireAuth =  (req , res , next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, secret , (err, decodedToken)=>{
            if (err) {
                console.log(err.message)
                res.status(400).json({error:err.message})
            }
            else {
                console.log(decodedToken)
                next()
            }
        });
    } else {
        res.redirect('/login')
    }
}


module.exports = requireAuth
