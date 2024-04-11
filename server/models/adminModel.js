const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
        name : {
            type : String,
            lowercase : true,
            required: [true]
        },
        email : {
            type : String,
            lowercase : true,
            unique : true,
            required : [true]
        },
        firstpass : {
            type:String,
            required : [true],
            minlength : [6 , "Minimum Password Length is 6 Characters"]      
        },
        secondpass : {
            type:String,
            required : [true],
            minlength : [6 , "Minimum Password Length is 6 Characters"]   
        },
        level : {
            type:String,
            required : [true],
            enum : ['LowLevelAuth','MiddleLevelAuth','HighLevelAuth']
        }
},{timestamps:true})


adminSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.firstpass = await bcrypt.hash(this.firstpass , salt)
    this.secondpass = await bcrypt.hash(this.secondpass , salt)
    next();
})

adminSchema.statics.login = async function(email , password){
    const admin = await this.findOne({email});
    if(admin){
        const auth = await bcrypt.compare(password , admin.firstpass);
        if(auth){
            return admin;
        }
        console.log("Incorrect Password")
        throw Error('Incorrect Password')
    }
    console.log("Email Doesn't Exists")
    throw Error("Email Doesn't Exists")
}


const adminModel = mongoose.model('admins',adminSchema)

module.exports = adminModel

