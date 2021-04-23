const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;



const itemSchema= new Schema({
    _id: Schema.Types.ObjectId,
    itemName:{
        type: String,
        required: true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    itemPrice :{
        type: Number,
        required: true,
    },
    itemDesc :{
        type:String,
        required:true,
        trim:true
    },
    itemCategory :{
        type:String,
        required:true
    },
    itemPicture:{
        img:{type:String}
    }
    // reviews: [
    //     {
    //         userId:mongoose.Schema.ObjectId, ref:'User',
    //         review:String
    //     }
    // ]

},{timestamps:true})

const Item = new mongoose.model("Item",itemSchema);
module.exports = Item;