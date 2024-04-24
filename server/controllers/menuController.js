const Menu = require('../models/menuModel')


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