const express = require('express');
const { createItem } = require('../controller/item');
//const { addCategory, getCategory } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middleware/reqsignin');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  const upload =multer({storage});

router.post('/item/create',requireSignin,adminMiddleware,upload.single('itemPicture'),createItem)

//router.get('/item/getItem',getCategory);

module.exports = router;