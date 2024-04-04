const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController')
const {requireAuth} = require('../Middlewares/authMiddleware')


router.post('/signup', authController.addUser)

router.get('/signin',requireAuth,authController.loginUser)

router.post('/signin',authController.loginUser)

router.get('/signout',authController.logOut)











module.exports = router