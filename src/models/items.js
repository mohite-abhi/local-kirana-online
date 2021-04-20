const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const itemSchema= new Schema({
    _id: Schema.Types.ObjectId,
    itemName:{
        type: String,
        required: true
    },
    itemPrice :{
        type: Number,
        required: true
    },
    itemQuantity :{
        type: Number,
        required: true
    },
})

const Item = new mongoose.model("Item",itemSchema);
module.exports = Item;