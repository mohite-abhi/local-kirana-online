const express = require('express');
const { requireSignin, userMiddleware } = require('../middleware/reqsignin');
const {addItemToCart} = require('../controller/cart')
const router = express.Router();


router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart);

module.exports = router ; 