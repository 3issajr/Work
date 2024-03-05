const express = require('express')
const router = express.Router();
const authController = require('../Controllers/authController')
const contController = require('../Controllers/contactController')
const {requireAuth} = require('../Middlewares/authMiddleware')

router.post('/signup',authController.addUsers)

router.get('/signin',requireAuth,authController.loginUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)

router.post('/contactus',contController.Contact)


module.exports = router;