const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signup, signin, requireSignin } = require("../../controller/admin/auth");

router.post('/admin/signup',signup);

router.post('/admin/signin',signin);


module.exports = router ;