const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController')
const contactController = require('../controllers/contactController')
const bookController = require('../controllers/bookController')
const adminController = require('../controllers/adminController')
const requireAuth = require('../middlewares/authMiddleware')


router.post('/signup', authController.addUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)

router.get('/profile',requireAuth,authController.getUser)

router.post('/contact',contactController.addContact)

router.post('/book',bookController.addBook)

router.post('/')


module.exports = router