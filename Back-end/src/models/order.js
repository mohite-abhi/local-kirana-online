const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const orderSchema = Schema({

    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
            quantity: { type: Number, default: 1 },
            price: { type: Number, required: true }
        }
    ],

    name: {
        type: String,
        required: true,
        minlength: 3

    },
    phone: {
        type: Number,
        required: true,
        min: 10,
        unqiue: true
    },
    pin: {
        type: Number,
        required: true,
        min: 6
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    road: {
        type: String,
        required: true
    }

}
, { timestamps: true }
)

const Order = new mongoose.model("Order", orderSchema);
module.exports = Order;