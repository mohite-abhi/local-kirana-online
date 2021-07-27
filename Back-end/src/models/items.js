const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;



const itemSchema= new Schema({
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    itemQuantity :{
        type: String,
        required : true
    }, 
    // itemPicture:[{
    //     img:{type:String}
    // }],
    reviews: [
        {
            userId:
            {type:mongoose.Schema.ObjectId, ref:'User'},
            review:String
        }
    ],
    createdBy: { type:mongoose.Schema.ObjectId, ref:'User'},
    updatedAt: Date


},{timestamps:true})

const Item = new mongoose.model("Item",itemSchema);
module.exports = Item; 