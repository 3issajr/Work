const mongoose = require('mongoose')

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


const adminModel = mongoose.model('admins',adminSchema)

module.exports = adminModel

