const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    imagePath: { type: String },
    stock: { type: Number }
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);