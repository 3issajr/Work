const Admin = require('../models/adminModel')
const Menu = require('../models/menuModel')
const User = require('../models/userModel')


exports.addAdmin = async (req , res) =>{
    try{

    }
    catch(err){

    }
}


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