const Book = require('../models/bookModel')
const User = require('../models/userModel')


exports.addBook = async (req,res)=>{
    try{
   
        const userEmail = req.decodedToken.email;

        if (!userEmail) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const newBook = new Book({...req.body, email: userEmail});

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

exports.getBook = async (req, res) => {
    try {
     const email = req.decodedToken.email;
 
     if (!email || email === '') { // Check if email is not provided or empty
         return res.status(401).json({ error: "Unauthorized: User must log in first" });
        }
 
     const booking = await Book.find({ email : email });
 
     if (!booking) {
         return res.status(404).json({ error: "No booking found for this user" });
        }
        
    return res.status(200).json({ booking });

    } catch (err) {
         console.error("Error fetching user bookings:", err);
         return res.status(500).json({ error: "Internal server error" });
    }
 };
 