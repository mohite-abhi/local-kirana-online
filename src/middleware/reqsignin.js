const jwt = require('jsonwebtoken')

exports.requireSignin = (req,res,next) =>{
    if(req.headers.authorization)
    {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token,process.env.JWT_SECRET);
    console.log(user);
    req.user = user;
    }
    else{
        return res.status(400).send("Authorization required!");
    }
    
    next();
}

exports.adminMiddleware = async(req,res,next)=>{
    if(req.user.role !== 'admin'){
        return res.status(400).send("Admin Access denied");
    }
    next();

}

exports.userMiddleware = async(req,res,next)=>{
    if(req.user.role !== 'user'){
        return res.status(400).send("User Access denied");
    }
    next();

}