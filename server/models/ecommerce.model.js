const mongoose = require('mongoose');


const EcommerceSchema = new mongoose.Schema({

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