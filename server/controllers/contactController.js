const Contact = require('../models/contactModel')
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };

exports.addContact = async (req , res) =>{
    try{
        const newContact = new Contact(req.body)
        if(!newContact.name){
            res.status(400).json({error: "Please Fill Your Name"})
            console.log("Contact Name Error")
            return;
        }
        else if(!newContact.email){
            res.status(400).json({error: "Please Fill Your Email"})
            console.log("Contact Email Error")
            return;
        }
        else if(!newContact.subject){
            res.status(400).json({error: "Please Fill Your Subject"})
            console.log("Contact Subject Error")
            return;
        }
       else  if(!newContact.message){
            res.status(400).json({error: "Please Fill Your Message"})
            console.log("Contact Message Error")
            return;
        }
        else if (!validateEmail(newContact.email)) {
            res.status(400).json({ error: 'Invalid Email Format' });
            console.log("Email Format Error")
            return;
        }
        await newContact.save()
        res.status(201).json({message:"Thanks For Submitting"})
    }
    catch (err){
        res.status(400).json({error :"Something Went Wrong"})
    }
}