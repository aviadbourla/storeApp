
var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product