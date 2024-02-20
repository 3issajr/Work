const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema(
 {
    name:{
        type:String,
        lowercase:true,
        required: [true , "Please Enter Your Name"]
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required: [true, "Please Enter Your E-mail"],
        validate : [isEmail, 'Please enter a valid email']
    },
    firstpass:{
        type:String,
        required: [true, "Please Enter Your Password"],
        minlegth:[6 , "Minimum password length is 6 characters"]
    },
    secondpass:{
        type:String,
        required:[true, "Please Re-Enter Your Password"],
        minlength:[6, "Minimum password length is 6 characters"]
    }
    
}
,{timestamps:true} // used to ensure that the data being processed was created at the correct time.
)

// Adding Salted Hashed Encrypted Password
userSchema.pre('save' , async function (next) {
    const salt = await bcrypt.genSalt(); //
    this.firstpass = await bcrypt.hash(this.firstpass , salt)
    this.secondpass = await bcrypt.hash(this.secondpass , salt)
    next();
})

// Using custom method with login authnetication and compare the encrypted password to make sure it's valid
userSchema.statics.login = async function(email , password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password , user.firstpass);
        if(auth){
            console.log(user.name,"Logged In")
            return user;
        }
        console.log("Incorrect Password")
        throw Error('Incorrect Password')
    }
    console.log("Incorrect Email")
    throw Error('Incorrect Email')

}

const userModel = mongoose.model("users",userSchema)

module.exports = userModel
