const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signup, signin} = require("../controller/auth");
const {requireSignin} = require("../middleware/reqsignin")

router.post('/signup',signup);

router.post('/signin',signin);

router.post('/profile',requireSignin,(req,res) => {
    console.log(req.user._id);
    res.status(200).json({user:'profile'})
})

module.exports = router ;
