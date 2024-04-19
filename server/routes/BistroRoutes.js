const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const contactController = require('../controllers/contactController')
const bookController = require('../controllers/bookController')
const adminController = require('../controllers/adminController')
const requireAuth = require('../middlewares/authMiddleware')



//  User Section

router.post('/signup', authController.addUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)

router.put('/profile/:id',authController.updateProfile)

router.get('/profile',requireAuth,authController.getUser)

router.post('/contact',contactController.addContact)

router.post('/book',requireAuth,bookController.addBook)

router.get('/userbook',requireAuth,bookController.getBook)


//  Admin Section

router.post('/adminregister',adminController.adminRegister)

router.post('/adminlogin',adminController.adminLogin)

// router.get('/admins' , adminController)

router.post('/menu',adminController.addMenu)

router.get('/menu',adminController.getMenu)

router.delete('/menu/:id',adminController.deleteMenu)

router.put('/menu/:id', adminController.updateMenu);


router.get('/user',adminController.getUser)

router.delete('/user/:id',adminController.deleteUser)


router.get('/book',adminController.getBooking)

router.delete('/book/:id',adminController.deleteBooking)

router.put('/book/:id',adminController.updateBooking)


module.exports = router