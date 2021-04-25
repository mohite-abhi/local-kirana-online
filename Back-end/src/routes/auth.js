const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signup, signin, requireSignin } = require("../controller/auth");

router.post('/signup',signup);

router.post('/signin',signin);

// router.post('/profile',requireSignin,(req,res) => {
//     console.log(req.user._id);
//     res.status(200).json({user:'profile'})
// })

module.exports = router ;