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
exports.adminRegister = async (req, res) => {
  try {
      const newAdmin = new Admin(req.body);
      const existingAdmin = await Admin.findOne({ email: newAdmin.email });

      if (!newAdmin.name) {
          throw new Error("Fill your name");
      }
      if (!newAdmin.email) {
          throw new Error("Fill your email");
      }
      if (!validateEmail(newAdmin.email)) {
          throw new Error("Invalid email format");
      }
      if (existingAdmin) {
          throw new Error("Email already exists");
      }
      if (!newAdmin.firstpass) {
          throw new Error("Fill your password");
      }
      if (!newAdmin.secondpass) {
          throw new Error("Fill your password");
      }
      if (newAdmin.firstpass !== newAdmin.secondpass) {
          throw new Error("Password mismatch");
      }
      if (newAdmin.firstpass.length < 6 || newAdmin.secondpass.length < 6) {
          throw new Error("Minimum password length is 6");
      }
      if (!newAdmin.level) {
          throw new Error("Choose your level");
      }

      await newAdmin.save();
      res.status(201).json({ message: "Registration successfully" });
  } catch (error) {
      console.error("Admin registration error:", error);
      res.status(400).json({ error: error.message });
  }
};

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
      if (!email || !password) {
          throw new Error("Please provide both email and password");
      }

      const admin = await Admin.login(email, password);
      if (!admin) {
          throw new Error("Invalid email or password");
      }

      res.status(200).json({ admin, message: "Login successfully" });
      console.log("Admin Login Successfully");
  } catch (error) {
      console.error("Admin login error:", error);
      res.status(400).json({ error: error.message });
  }
};


exports.adminLogOut = (req, res) => {
  try {
      res.status(200).json({ message: "Successfully Logged Out" });
  } catch (error) {
      console.error("Logout Error:", error);
      res.status(500).json({ message: "Failed to logout" });
  }
};

//Admin Section Ends


// Menu Section Starts
exports.addMenu = async (req, res) => {
  try {
      const newMenu = new Menu({
          name: req.body.name,
          price: req.body.price,
          info: req.body.info,
          photo: req.file ? req.file.path : '' // Save the path to the photo if uploaded
      });

      if (!newMenu.name) {
          throw new Error("Fill Menu Item Name");
      }
      if (!newMenu.price) {
          throw new Error("Fill Menu Item Price");
      }
      if (!newMenu.info) {
          throw new Error("Fill Menu Item Info");
      }
      if (!newMenu.photo) {
          throw new Error("Fill Menu Item Photo");
      }

      await newMenu.save();
      res.status(201).json({ message: "Menu Item Added Successfully" });
  } catch (error) {
      console.error("Menu item addition error:", error);
      res.status(400).json({ error: error.message });
  }
};

exports.getMenu = async (req, res) => {
  try {
      const menu = await Menu.find();

      if (menu.length === 0) {
          throw new Error("No Menu Items Found");
      }

      res.status(200).json({ menu, message: "Menu Fetched Successfully" });
      console.log("Menu Fetched");
  } catch (error) {
      console.error("Error fetching menu:", error);
      res.status(400).json({ error: error.message });
  }
};


exports.updateMenu = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedMenuData = req.body;

      const updatedMenu = await Menu.findByIdAndUpdate(id, updatedMenuData, { new: true });

      if (!updatedMenu) {
          throw new Error("Menu item not found");
      }

      res.status(200).json({ message: "Menu item updated successfully", updatedMenu });
  } catch (error) {
      console.error("Error updating menu item:", error);
      res.status(404).json({ error: error.message });
  }
};


exports.deleteMenu = async (req, res) => {
  try {
      const { id } = req.params;

      const deletedMenu = await Menu.findByIdAndDelete(id);

      if (!deletedMenu) {
          throw new Error("Menu item not found");
      }

      res.status(200).json({ message: "Menu item deleted successfully" });
      console.log("Menu Item Deleted");
  } catch (error) {
      console.error("Error deleting menu item:", error);
      res.status(404).json({ error: error.message });
  }
};

// Menu Section Ends


// User Section Starts
exports.getUser = async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            throw new Error("No Users Found");
        }

        res.status(200).json({ users, message: "Users Fetched Successfully" });
        console.log("Users Fetched");
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
  try {
      const { id } = req.params;

      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
          throw new Error("User not found");
      }

      res.status(200).json({ message: "User deleted successfully" });
      console.log("User Deleted");
  } catch (error) {
      console.error("Error deleting user account:", error);
      res.status(404).json({ error: error.message });
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
          throw new Error("Booking order not found");
      }

      res.status(200).json({ message: "Booking order deleted successfully" });
      console.log("Booking Item Deleted");
  } catch (error) {
      console.error("Error deleting booking order:", error);
      res.status(404).json({ error: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
      const updatedBooking = await Book.findByIdAndUpdate(id, { status }, { new: true });

      if (!updatedBooking) {
          throw new Error("Booking not found");
      }

      res.status(200).json({ message: "Booking status updated successfully", booking: updatedBooking });
  } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(404).json({ error: error.message });
  }
};

// Booking Section Ends

// Contact Section Starts

exports.getMessage = async (req, res) => {
  try {
      const messages = await Messages.find();

      if (messages.length === 0) {
          throw new Error("No Messages Found");
      }

      res.status(200).json({ messages, message: "Messages Retrieved Successfully" });
      console.log("Fetched Messages");
  } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(400).json({ error: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
      const { id } = req.params;

      const deletedMessage = await Messages.findByIdAndDelete(id);

      if (!deletedMessage) {
          throw new Error("Message not found");
      }

      res.status(200).json({ message: "Message deleted successfully" });
      console.log("Message Item Deleted");
  } catch (error) {
      console.error("Error deleting message:", error);
      res.status(404).json({ error: error.message });
  }
};

// Contact Section Ends