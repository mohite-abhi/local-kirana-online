const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const storeSchema= new Schema({
    storeName:{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    pin :{
        type: Number,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    itemID: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Item' 
    }],
})

const Store = new mongoose.model("Store",storeSchema);

module.exports = Store;
 