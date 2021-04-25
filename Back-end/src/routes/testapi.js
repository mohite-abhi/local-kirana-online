var express = require("express")
var router = express.Router();

router.get("*",function(req,res,next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();

    res.send("API is working properly");
    
});
module.exports = router;