const express = require('express')
const router = express.Router();
const lugxController = require ('../controllers/lugxController')
const authController = require('../controllers/authController')
const requireAuth = require('../middleware/authMiddleware')
const uploadMiddleware = require('../middleware/uploadMiddleware');

// Adding Product
router.post('/addproduct',lugxController.addProduct)

// Getting all Products
router.get('/getproduct',lugxController.getProduct)

// Getting a product using his name
router.get('/getproduct/:name',lugxController.getProductName)

// Delete product using his name
router.delete('/deleteproduct/:name',lugxController.deleteProduct)

// Adding User
router.post('/signin/adduser',authController.addUser)

// Getting Users
router.get('/signin/getuser',authController.getUser)

// Login
router.get('/signin',requireAuth,authController.loginUser)

router.post('/signin',authController.loginUser)

router.get('/',requireAuth,authController.loginUser)

// Image 
router.post('/upload',uploadMiddleware,authController.uploadImage)

module.exports = router;