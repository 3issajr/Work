const Admin = require('../models/adminModel')
const Menu = require('../models/menuModel')
const User = require('../models/userModel')
const Book = require('../models/bookModel')
const Messages = require('../models/contactModel')


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };



//Admin Section Starts
exports.adminRegister = async (req , res)=>{
    try{
      const newAdmin = new Admin(req.body)
      const existingAdmin = await Admin.findOne({email : newAdmin.email})

      if(!newAdmin.name){
        res.status(400).json({error : "Fill Your Name"})
        console.log("Admin Name Error")
        return;
      }
      else if (!newAdmin.email){
        res.status(400).json({error : "Fill Your Email"})
        console.log("Admin Email Error")
        return;
      }
      else if (!validateEmail(newAdmin.email)) {
        res.status(400).json({ error: 'Invalid Email Format' });
        console.log("Email Format Error")
        return;
    }
      else if (existingAdmin) {
        res.status(400).json({ error: 'Email Already Exists' });
        console.log("Email already exists ")
        return;
    }
      else if (!newAdmin.firstpass){
        res.status(400).json({error : "Fill Your Password"})
        console.log("Admin FirstPass Error")
        return;
      }
      else if (!newAdmin.secondpass){
        res.status(400).json({error : "Fill Your Password"})
        console.log("Admin SecondPass Error")
        return;
      }
      else if(newAdmin.firstpass !== newAdmin.secondpass){
        res.status(400).json({error : "Password MisMatch"})
        console.log("Password Error")
        return;
    }
      else if (newAdmin.firstpass.length & newAdmin.secondpass.length <6) {
        res.status(400).json({ error: 'Minimum Password  length is 6' });
        console.log("Password Length Error")
        return;
    }
      else if (!newAdmin.level){
        res.status(400).json({error : "Choose Your Level"})
        console.log("Admin Level Error")
        return;
      }
    else {
        await newAdmin.save();
        res.status(201).json({message:"Registeration Successfully"})
    }
    }
    catch(err){
        res.status(400).json({error : err.message})
        res.status(500).json({ err: 'Internal server error' });
      }
}

exports.adminLogin = async (req , res) =>{
    const {email , password} = req.body
    try{
        const admin = await Admin.login(email, password);
        res.status(200).json({admin,message:"Login Succesfully"})
        console.log("Admin Login Successfully")
    }
    catch(err){
        res.status(400).json({error : err.message})
    }
}

exports.adminLogOut = async (req , res)=>{
try {
    res.status(200).json({ message: "Successfully Logged Out" });
    }
catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ message: "Failed to logout" });
}
}
//Admin Section Ends


// Menu Section Starts
exports.addMenu = async (req , res)=>{
    try{
      const newMenu = new Menu({
        name: req.body.name,
        price: req.body.price,
        info: req.body.info,
        photo: req.file ? req.file.path : '' // Save the path to the photo if uploaded
    });
     if(!newMenu.name){
        res.status(400).json({error : "Fill Menu Item Name"})
        console.log("Menu Name Error")
     }
     else if (!newMenu.price){
        res.status(400).json({error : "Fill Menu Item Price"})
        console.log("Menu Price Error")
     }
     else if(!newMenu.info){
        res.status(400).json({error : "Fill Menu Item Info"})
        console.log("Menu Info Error")
     }
     else if(!newMenu.photo){
        res.status(400).json({error : "Fill Menu Item Photo"})
        console.log("Menu Photo Error")
     }
     else {
        await newMenu.save()
        res.status(201).json({message : "Menu Item Added Succesfully"})
     }
    }
    catch(err){
       res.status(400).json({error : err.message})
    }
}

exports.getMenu = async (req , res)=>{
    try {
      const menu = await Menu.find()

      if(menu.length === 0){
        res.status(400).json({error : "No Menu Items Found"})
        return
      }

      res.status(200).json({menu , message : "Menu Fetched Successfully"})
      console.log("Menu Fetched")
    }
    catch (err){
      console.log(err)
      res.status(500).json({ err: 'Internal server error' });
    }
}

exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params; 
        const updatedMenuData = req.body; 

        const updatedMenu = await Menu.findByIdAndUpdate(id, updatedMenuData, { new: true });

        if (!updatedMenu) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item updated successfully', updatedMenu });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedMenu = await Menu.findByIdAndDelete(id);

        if (!deletedMenu) {
            console.log("Menu Deleting Item is Not Fond")
            return res.status(404).json({ error: 'Menu item not Found' });
        }

        res.status(200).json({ message: 'Menu Item deleted successfully' });
        console.log("Menu Item Deleted")

    } catch (err) {
        console.error('Error deleting menu item:', err);
        res.status(500).json({ err: 'Internal server error' });
    }
};
// Menu Section Ends


// User Section Starts
exports.getUser = async (req , res)=>{
    try {
      const user = await User.find()

      if(user.length === 0){
        res.status(400).json({error : "No Users Found"})
        console.log("Users Not Found")
      }
      res.status(200).json({user , message :"User Fetched Succesfully"})
      console.log("Users Fetched")
    }

    catch (err) {
      res.status(400).json({error : err.message})
      res.status(500).json({ err: 'Internal server error' });
    }
}

exports.deleteUser = async (req , res) => {
    try {
      const { id } = req.params; 

      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
          console.log("Deleting User is Not Found")
          return res.status(404).json({ error: 'There are no Users'});
      }

      res.status(200).json({ message: 'User Deleted Successfully' });
      console.log("User Deleted")

  } catch (err) {
      console.error('Error deleting User Account:', err);
      res.status(500).json({ err: 'Internal server error' });
  }
};
// User Section Ends



// Booking Section Starts
exports.getBooking = async (req , res)=>{
  try {
   const booking = await Book.find()

   if(booking.length === 0){
    res.status(400).json({error : "No Booking Found"})
    console.log("Admin Booking Not Found")
   }

   else {
    res.status(200).json({ booking , message:"Bookings Fetched Succesfully"})
    console.log("Fetched Booking")
   }
  }
  catch (error) {
    res.status(500).json({ err: 'Internal server error' });
  }
}

exports.deleteBooking = async (req, res) => {
  try {
      const { id } = req.params; 

      const deletedBooking = await Book.findByIdAndDelete(id);

      if (!deletedBooking) {
          console.log("Booking Deleting Order is Not Found")
          return res.status(404).json({ error: 'There is no Booking Orders' });
      }

      res.status(200).json({ message: 'Booking Order Deleted Successfully' });
      console.log("Booking Item Deleted")

  } catch (err) {
      console.error('Error deleting Booking Order:', err);
      res.status(500).json({ err: 'Internal server error' });
  }
};

exports.updateBooking = async (req , res)=>{
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedBooking = await Book.findByIdAndUpdate(id, { status : status }, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking status updated successfully', booking: updatedBooking });
    } 
    catch (error) {
        console.error('Error updating booking status:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
  }
// Booking Section Ends

// Contact Section Starts

exports.getMessage = async (req , res)=>{
  try{
    const contact = await Messages.find()

    if(contact.length === 0){
      res.status(400).json({error : "No Messages Found"})
      console.log("Admin Messages Not Found")
    }
    else {
      res.status(200).json({contact, message : "Messages Retrieved Successfully"})
      console.log("Fetched Messages")
    }
  }
  catch(err){
    res.status(500).json({ err:'Internal Server Error'})
  }
}

exports.deleteMessage = async (req , res)=>{
  try {
    const { id } = req.params; 

    const deletedMessage = await Messages.findByIdAndDelete(id);

    if (!deletedMessage) {
        console.log("Message Deleting Order is Not Found")
        return res.status(404).json({ error: 'There is no Messages' });
    }

    res.status(200).json({ message: 'Message Deleted Successfully' });
    console.log("Message Item Deleted")

} catch (err) {
    console.error('Error deleting Message :', err);
    res.status(500).json({ err: 'Internal server error' });
}
};
// Contact Section Ends