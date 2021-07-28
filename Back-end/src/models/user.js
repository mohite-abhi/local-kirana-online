const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20
    },
    userName:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
        min:3,
    },
    email :{
        type: String,
        required: true,
        lowercase:true,
        trim:true,
        unique:[true ,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }

    },
    hash_password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        min:10,
        trim:true,
        required: true,
        unique:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true});

userSchema.virtual('password')
.set(function(password){
    // console.log(password);
    this.hash_password = bcrypt.hashSync(password,10);
})

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;

})

userSchema.methods ={
    authenticate : function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}

const User = new mongoose.model("User",userSchema);
module.exports = User;