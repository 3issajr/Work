const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    production:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image : {
        type:String,
        requred:true
    }
},{timestamps:true}
)

const productModel = mongoose.model("products",productSchema)

module.exports = productModel