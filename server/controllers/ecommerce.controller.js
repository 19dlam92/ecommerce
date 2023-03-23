const Ecommerce = require('../models/ecommerce.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

  createProduct: function ( req, res ) {
    Ecommerce.create( req.body )
      .then( newProduct => {
        res.json({ results: newProduct })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },

  showAllProducts: function ( req, res ) {
    Ecommerce.find( )
      .then( allProducts => {
        res.json({ results: allProducts })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },

  showOneProduct: function ( req, res ) {
    Ecommerce.findOne({ _id: req.params.id })
      .then( oneProduct => {
        res.json({ results: oneProduct })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },

  updateProduct: function ( req, res ) {
    Ecommerce.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then( updateProduct => {
        res.json({ results: updateProduct })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },

  deleteProduct: function ( req, res ) {
    Ecommerce.deleteOne({ _id: req.params.id })
      .then( deleteProduct => {
        res.json({ results: deleteProduct })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  }

}

