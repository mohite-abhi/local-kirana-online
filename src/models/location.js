const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;


const locationSchema= new Schema({
    pin :{
        type: Number,
        required: true
    },
    storeID: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Store' 
    }]
})


const Location = new mongoose.model("Location",locationSchema);
module.exports = Location;