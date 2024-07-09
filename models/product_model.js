const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    quantity: Number,
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
