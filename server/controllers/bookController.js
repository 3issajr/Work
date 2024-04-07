const Book = require('../models/bookModel')

exports.addBook = async (req,res)=>{
    try{
     const newBook = new Book(req.body)

         if(!newBook.date){
            res.status(400).json({error : "Fill You Date"})
            console.log("Book Data Error")
            return;
         }
         else if(!newBook.time){
            res.status(400).json({error : "Choose Your Time"})
            console.log("Book Time Error")
            return;
         }
         else if(!newBook.name){
            res.status(400).json({error : "Fill Your Name"})
            console.log("Book Name Error")
            return;
         }
         else if(!newBook.phone){
            res.status(400).json({error : "Fill Your Phone"})
            console.log("Book Phone Error")
            return;
         }
         else if (!newBook.phone.startsWith('+20') || newBook.phone.length !== 13) {
            res.status(400).json({ error: "Phone Number must start with +20 and be 13 digits long" });
            console.log("Invalid Phone Number Format");
            return;
         }
         else if(!newBook.persons){
            res.status(400).json({error : "Choose Your Number of Persons"})
            console.log("Book Persons Error")
            return;
         }

     await newBook.save()
     res.status(201).json({message : "Booked Successfully"})
     console.log("Booked Successfully")
     return;
    }
    catch(err){
     res.status(500).json({error : err.message})
     console.log("Something Went Wrong")
     return;
    }
}

