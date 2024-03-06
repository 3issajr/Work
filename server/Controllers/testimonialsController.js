const Testimonials = require('../Model/testimonialsModel')
exports.addTestimonials = async (req,res)=>{
 const registeredTestimonials = new Testimonials(req.body)
 try{
   if(!registeredTestimonials.name){
    res.status(400).json({error:"Name is Required"})
    console.log("Name error")
    return;
   }
   else if (!registeredTestimonials.message){
    res.status(400).json({error:"Message is required"})
    console.log("Message error")
    return;
   }

   await registeredTestimonials.save()
   res.status(200).json(registeredTestimonials)
   console.log("Message Added")
 }
 catch(err){
  res.status(500).json({error : err.message})
  console.log("Error")
 }
}