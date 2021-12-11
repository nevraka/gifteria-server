const { Schema, model } = require('mongoose');
require('./Product.model');
// 1. Define your schema

let userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: 'images/profile.png',
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

// 2. Define your model
let UserModel = model('User', userSchema);

// 3. Export your Model with 'module.exports'
module.exports = UserModel;
