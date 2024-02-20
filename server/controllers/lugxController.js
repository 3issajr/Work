const Product = require('../model/productschema')

  

exports.addProduct = async (req,res) => {
    try {
        const product = new Product(req.body);
        await product.save()
            res.status(201).json(data)
            console.log(product.name,"Created")
    }
    catch (err) {
        res.status(400).json({error:err.message})
        console.log("Product's not Created")
    }
};

exports.getProduct = async (req,res) => {
    try {
        const products = await Product.find().sort({ createdAt : -1 })
            res.status(200).json(products)
            console.log("Products Sorted")
    }
    catch (err) {
        res.status(400).json({error:err.message})
        console.log("Products Unsorted")
    }
}

exports.getProductName = async  (req,res)=>{
    try {
        const name = req.params.name
        const product = await Product.findOne({name : new RegExp(name, 'i')})
        if(!product){
            res.status(404).json({error : "Product Not Found"})
        }
            res.status(200).json(product);
            console.log(product.name," Found")
    }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
}


exports.deleteProduct = async (req,res) => {
    try {
        const product = await Product.findOneAndDelete({name:req.params.name})
        if(!product){
            res.status(404).json({error : "Product Not Found"})
        }
            res.status(202).json(product)
            console.log("Product Deleted")
    }
    catch (err) {
        res.status(404).json({error:err.message})
    }
}
