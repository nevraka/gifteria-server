const { Schema, model } = require('mongoose');
require('./Category.model');

let productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

// 2. Define your model
let ProductModel = model('Product', productSchema);

// 3. Export your Model with 'module.exports'
module.exports = ProductModel;
