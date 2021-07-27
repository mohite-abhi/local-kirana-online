const express = require('express');
const {getCategory } = require('../controller/category');
const { getItem } = require('../controller/shop');
const { requireSignin, adminMiddleware } = require('../middleware/reqsignin');

const router = express.Router();

router.post('/shopitem/id',getItem);

module.exports = router;