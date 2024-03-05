const Contact = require('../Model/contactModel')


exports.Contact = async (req,res)=>{
    try{
        const addedcontact = new Contact(req.body);

        if(!addedcontact.name){
            res.status(400).json({error :"Please Fill Your Name"})
            console.log("Field Error")
            return;
        }
        else if(!addedcontact.email){
            res.status(400).json({error : "Please Fill Your Email"})
            console.log("Field Error")
            return;
        }
        else if(!addedcontact.subject){
            res.status(400).json({error : "Please Fill Your Subject"})
            console.log("Field Error")
            return;
        }
         await addedcontact.save()
         res.status(201).json({message:"Thanks For Your Feedback"})
         console.log("Form Created")
    }
    catch(err){
        res.status(500).json({error : err.message})
        console.log(err)
    }
}