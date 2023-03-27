const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {

  createUser: function ( req, res ) {
    User.create( req.body )
      .then( newUser => {
        res.json({ results: newUser })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for createUser", error: err }))
  },

  allUsers: function ( req, res ) {
    User.find()
      .then( allUsers => {
        res.json({ results: allUsers })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for allUsers", error: err }))
  },

  oneUser: function ( req, res ) {
    User.findOne({ _id: req.params.id })
      .then( oneUser => {
        res,json({ results: oneUser })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for oneUser", error: err }))
  },

  updateUser: function ( req, res ) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then( updateUser => {
        res.json({ results: updateUser })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for updateUser", error: err }))
  },

  deleteUser: function ( req, res ) {
    User.deleteOne({ _id: req.params.id })
      .then( deleteUser => {
        res.json({ results: deleteUser })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for deleteUser", error: err }))
  },

  registerUser: function ( req, res ) {
    User.create( req.body )
      .then( register => {
        res.json({ results: 'You have registered a User!', register: register })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR for registerUser", error: err }))
  }

}