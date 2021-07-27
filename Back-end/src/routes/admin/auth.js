const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signup, signin } = require("../../controller/admin/auth");
const {requireSignin} = require("../../middleware/reqsignin")

router.post('/admin/signup',signup);

router.post('/admin/signin',signin);


module.exports = router ;