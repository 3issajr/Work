const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController')
const contactController = require('../controllers/contactController')
const bookController = require('../controllers/bookController')
const adminController = require('../controllers/adminController')
const requireAuth = require('../middlewares/authMiddleware')



//  User Section

router.post('/signup', authController.addUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)

router.get('/profile',requireAuth,authController.getUser)

router.post('/contact',contactController.addContact)

router.post('/book',bookController.addBook)


//  Admin Section

router.post('/adminregister',adminController.adminRegister)

router.post('/adminlogin' , adminController.adminLogin)

router.post('/menu',adminController.addMenu)

router.get('/menu',adminController.getMenu)

router.delete('/menu/:id',adminController.deleteMenu)

router.put('/menu/:id', adminController.updateMenu);

router.get('/user',adminController.getUser)


module.exports = router