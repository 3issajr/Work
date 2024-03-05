const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            lowercase:true,
            unique:true,
            required : [true, "Please Enter Your Name"],
            minlength : [5, "Minimum Username Length is 5 Characters"]
        },
        email:{
            type:String,
            lowercase:true,
            unique:true,
            trim:true,
            required : [true, "Please Enter Your E-mail"],
            // validate : [validateEmail, 'Please enter a valid email'],
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        firstpass:{
            type:String,
            required: [true, "Please Enter Your Password"],
            minlength: [6, "Minimum Password Length is 6 Characters"]
        },
        secondpass:{
            type:String,
            required: [true, "Please Re-Enter Your Password"],
            minlength: [6, "Minimum Password Length is 6 Characters"]
        },
        gender:{
            type:String,
            enum:['Male','Female']
        }
    }
    ,{timestamps:true} // used to ensure that the data being processed was created at the correct time
)

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.firstpass = await bcrypt.hash(this.firstpass , salt)
    this.secondpass = await bcrypt.hash(this.secondpass , salt)
    next();
})

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

const userModel = mongoose.model("User",userSchema)

module.exports = userModel