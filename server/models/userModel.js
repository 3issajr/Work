const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema(
    {
        name : {
            type:String,
            lowercase:true,
            required :true,
            minlength : [5 , "Minimum Username Length is 5 Characters"]
        },
        email : {
            type:String,
            lowercase:true,
            unique:true,
            trim:true,
            required :true
        },
        gender : {
            type:String,
            enum : ['Male' , 'Female']
        },
        phone : {
            type:String,
            unique:true,
            required :true
        },
        firstpass : {
            type:String,
            required :true,
            minlength : [6 , "Minimum Password Length is 6 Characters"]
        },
        secondpass : {
            type:String,
            required :true,
            minlength : [6 , "Minimum Password Length is 6 Characters"]
        }
    }
    ,{timestamps : true}
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
    console.log("Email Doesn't Exists")
    throw Error("Email Doesn't Exists")
}


const userModel = mongoose.model("User",userSchema)

module.exports = userModel