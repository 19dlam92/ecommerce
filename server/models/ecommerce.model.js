const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const EcommerceSchema = new mongoose.Schema({

  category: {
    type: String,
    required: [true, 'Please select a category']
  },
  product: {
    type: String,
    required: [true, 'Please select a product']
  },
  price: {
    type: Number,
    require: [true, 'Please enter the price']
  },
  imageUpload: {
    type: String,
    require: [true, 'Please provide a photo for the product']
  }

}, { timestamps: true })

const Ecommerce = mongoose.model('Ecommerce', EcommerceSchema);
module.exports = Ecommerce;

// login reg will have its own model