const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middleware/reqsignin');
const router = express.Router();

router.post('/category/create',requireSignin,adminMiddleware,addCategory);
router.get('/category/getCategory',getCategory);

module.exports = router; 