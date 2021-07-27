const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = async(req,res)=>{
    try{
    const user = await User.findOne({email : req.body.email});
    console.log(user);
    if(user)
    {
        return res.status(400).send("email already exists");
    }
const userData = new User(req.body);
const createUser = await userData.save();
res.status(201).send(createUser);

 }
 catch(err){
     res.status(400).send(err);
 }
}

exports.signin = async(req,res) =>{
    try{
        const user = await User.findOne({email : req.body.email});
        if(user)
        {
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'2h'});
                const {_id,firstName,lastName,email,fullName} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id,firstName,lastName,email,fullName
                    }
                });
            }
            else{
                return res.status(400).send("invalid password")
            }
        }
     }
     catch(err){
         res.status(400).send(err);
     }
}
