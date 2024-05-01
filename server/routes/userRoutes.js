const express = require('express')
const userRouter = express.Router()


const authController = require('../controllers/authController')
const contactController = require('../controllers/contactController')
const bookController = require('../controllers/bookController')
const menuController = require('../controllers/menuController')

const requireAuth = require('../middlewares/authMiddleware')


userRouter.post('/signup', authController.addUser)

userRouter.get('/signin',authController.loginUser)

userRouter.post('/signin',authController.loginUser)

userRouter.get('/signout',authController.logOut)

userRouter.put('/profile/:id',authController.updateProfile)

userRouter.get('/profile',requireAuth,authController.getUser)

userRouter.post('/contact',contactController.addContact)

userRouter.post('/book',requireAuth,bookController.addBook)

userRouter.get('/userbook',requireAuth,bookController.getBook)

userRouter.get('/usermenu',menuController.getMenu)


module.exports = userRouter