const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type : String,
        lowercase : true,
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true
    },
    subject : {
        type :String,
        required : true
    },
    message : {
        type :String,
        required : true
    }
},{timestamps : true})


contactModel = mongoose.model("contacts",contactSchema)

module.exports = contactModel