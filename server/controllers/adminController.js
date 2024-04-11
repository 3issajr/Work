const Admin = require('../models/adminModel')
const Menu = require('../models/menuModel')
const User = require('../models/userModel')

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
        res.status(500).json({error : err.message})
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

exports.getAdmin = async (req , res)=>{
  try{
   const admin = Admin.findOne(Admin.email)
  }
  catch(err){

  }
}
//Admin Section Ends


// Menu Section Starts
exports.addMenu = async (req , res)=>{
    try{
     const newMenu = new Menu(req.body)
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
    try{
      const menu = await Menu.find()
      res.status(200).json({menu , message : "Menu Fetched Successfully"})
      console.log("Menu Fetched")
    }
    catch(err){
      console.log(err)
      res.status(500).json({error : err.message})
    }
}

exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params; // Extract the menu item id from the request parameters
        const updatedMenuData = req.body; // Extract the updated menu item data from the request body

        // Update the menu item in the database
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
            return res.status(404).json({ error: 'Menu item not found' });
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
    try{
      const user = await User.find()
      res.status(200).json({user , message :"User Fetched Succesfully"})
      console.log("Users Fetched")
    }
    catch(err){
      res.status(400).json({error : err.message})
      console.log("Fetching User Error")
    }

}