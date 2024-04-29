const express = require('express')
const multer = require('multer');
const router = express.Router()

const authController = require('../controllers/authController')
const contactController = require('../controllers/contactController')
const bookController = require('../controllers/bookController')
const menuController = require('../controllers/menuController')
const adminController = require('../controllers/adminController')

const requireAuth = require('../middlewares/authMiddleware')

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


//  User Section

router.post('/signup', authController.addUser)

router.get('/signin',authController.loginUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)

router.put('/profile/:id',authController.updateProfile)

router.get('/profile',requireAuth,authController.getUser)

router.post('/contact',contactController.addContact)

router.post('/book',requireAuth,bookController.addBook)

router.get('/userbook',requireAuth,bookController.getBook)

router.get('/usermenu',menuController.getMenu)


//  Admin Section

router.post('/adminregister',adminController.adminRegister)

router.post('/adminlogin',adminController.adminLogin)

router.get('/adminsignout',adminController.adminLogOut)


router.get('/adminmessage',adminController.getMessage)

router.delete('/adminmessage/:id',adminController.deleteMessage)


router.post('/menu',upload.single('photo'),adminController.addMenu)

router.get('/menu',adminController.getMenu)

router.delete('/menu/:id',adminController.deleteMenu)

router.put('/menu/:id', adminController.updateMenu);


router.get('/user',adminController.getUser)

router.delete('/user/:id',adminController.deleteUser)


router.get('/book',adminController.getBooking)

router.delete('/book/:id',adminController.deleteBooking)

router.put('/book/:id',adminController.updateBooking)




module.exports = router