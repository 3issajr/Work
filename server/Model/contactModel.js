const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            lowercase:true,
            require:[true, "Please Enter Your Name"]
        },
        email:{
            type:String,
            lowercase:true,
            unique:true,
            trim:true,
            required:[true, "Please Enter Your Email"]
        },
        subject:{
            type:String,
            lowercase:true,
            require:[true, "Please Enter Your Subject"]
        }
    }
    ,{timestamps:true}
) 

const contactModel = mongoose.model("Contact",contactSchema)

module.exports = contactModel