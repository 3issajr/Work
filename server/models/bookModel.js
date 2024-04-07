const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    date : {
        type : Date,
        required:true
    },
    time : {
        type: String,
        enum : ['6:30','7:30','8:30']

    },
    name : {
        type: String,
        required:true,
        lowercase:true
    },
    phone : {
        type : String,
        unique:true,
        requrired:true
    },
    persons : {
        type : String,
        enum : ['1','2','3'],
        required:true
    }
},{timestamps:true})

const bookModel = mongoose.model("books",bookSchema)

module.exports = bookModel