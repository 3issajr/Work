const Menu = require('../models/menuModel')


exports.getMenu = async (req, res) => {
    try {
        const menu = await Menu.find();

        if (menu.length === 0) {
            return res.status(404).json({ error: "No Menu Items Found" });
        }

        return res.status(200).json({ menu, message: "Menu Fetched Successfully" });
    } catch (error) {
        console.error("Error fetching menu:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
