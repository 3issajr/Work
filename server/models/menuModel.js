const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    name: {
        type : String,
        lowercase : true,
        required : [true]
    },
    price : {
        type: String,
        lowercase : true,
        required : [true]
    },
    info : {
        type: String,
        lowercase : true,
        required : [true]
    }
},{timestamps : true})

const menuModel = mongoose.model('menus',menuSchema)

module.exports = menuModel