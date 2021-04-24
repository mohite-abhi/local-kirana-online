const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const customerSchema= Schema({
    name:{
        type: String,
        required: true,
        minlength : 3

    },
    phone :{
        type: Number,
        required: true,
        min:10,
        unqiue:true
    },
    pin :{
        type: Number,
        required: true,
        min:6
    },
    state :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    house :{
        type: String,
        required: true
    },
    road :{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Customer = new mongoose.model("Customer",customerSchema);
module.exports = Customer;