const express = require('express')
const adminRouter = express.Router()
const multer = require('multer');

const adminController = require('../controllers/adminController')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Add a timestamp or a unique identifier to the filename
    }
});
  
const upload = multer({ storage: storage });



adminRouter.post('/adminregister',adminController.adminRegister)

adminRouter.post('/adminlogin',adminController.adminLogin)

adminRouter.get('/adminsignout',adminController.adminLogOut)


adminRouter.get('/adminmessage',adminController.getMessage)

adminRouter.delete('/adminmessage/:id',adminController.deleteMessage)


adminRouter.post('/menu',upload.single('photo'),adminController.addMenu)

adminRouter.get('/menu',adminController.getMenu)

adminRouter.delete('/menu/:id',adminController.deleteMenu)

adminRouter.put('/menu/:id', adminController.updateMenu);


adminRouter.get('/user',adminController.getUser)

adminRouter.delete('/user/:id',adminController.deleteUser)


adminRouter.get('/book',adminController.getBooking)

adminRouter.delete('/book/:id',adminController.deleteBooking)

adminRouter.put('/book/:id',adminController.updateBooking)


module.exports = adminRouter