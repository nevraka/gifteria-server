const { Schema, model } = require('mongoose');
require('./Product.model');
// 1. Define your schema

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: 'images/profile.png',
  },
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

// 2. Define your model
let UserModel = model('user', userSchema);

// 3. Export your Model with 'module.exports'
module.exports = UserModel;
