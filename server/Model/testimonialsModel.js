const mongoose = require('mongoose')

const testimonialsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter Your Email"],
            lowercase:true,

        },
        message:{
            type:String,
            required:[true,"Please Enter Your Message"],
            lowercase:true
        }
    }
    ,{timestamps:true}
)

const testimonialsModel = mongoose.model("Testimonials",testimonialsSchema)

module.exports = testimonialsModel