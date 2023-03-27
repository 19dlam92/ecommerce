const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: [true, 'Please enter an email'],
    validate: {
      validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val),
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [8, 'Password MUST have at least 8 characters']
  }

}, { timestamps: true })

UserSchema.virtual('confirm')
  .get(() => this._confirm)
  .set(value => this._confirm = value)

UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirm) {
    this.invalidate('confirm', 'Password MUST match')
  }
  next()
})

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash
      next()
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User;