const Book = require('../models/bookModel')
const User = require('../models/userModel')


exports.addBook = async (req, res) => {
   try {
       const userEmail = req.decodedToken.email;

       if (!userEmail) {
           return res.status(401).json({ error: "Unauthorized" });
       }

       const newBook = new Book({ ...req.body, email: userEmail });

       if (!newBook.date) {
           throw new Error("Fill your date");
       }
       if (!newBook.time) {
           throw new Error("Choose your time");
       }
       if (!newBook.name) {
           throw new Error("Fill your name");
       }
       if (!newBook.phone) {
           throw new Error("Fill your phone");
       }
       if (!newBook.phone.startsWith("+20") || newBook.phone.length !== 13) {
           throw new Error("Phone number must start with +20 and be 13 digits long");
       }
       if (!newBook.persons) {
           throw new Error("Choose the number of persons");
       }

       await newBook.save();
       res.status(201).json({ message: "Booked successfully" });
       console.log("Booked Successfully");
   } catch (error) {
       console.error("Error adding booking:", error);
       res.status(400).json({ error: error.message });
   }
};

exports.getBook = async (req, res) => {
   try {
       const email = req.decodedToken.email;

       if (!email || email === '') {
           return res.status(401).json({ error: "Unauthorized: User must log in first" });
       }

       const booking = await Book.find({ email });

       if (booking.length === 0) {
           throw new Error("No Booking Found");
       } else {
           res.status(200).json({ booking });
       }
   } catch (error) {
       console.error("Error fetching user bookings:", error);
       res.status(404).json({ error: error.message });
   }
};
