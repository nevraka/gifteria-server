const { Schema, model } = require('mongoose');

let categorySchema = new Schema({
  name: String,
  image: String,
  description: String,
});

// 2. Define your model
let CategoryModel = model('Category', categorySchema);

// 3. Export your Model with 'module.exports'
module.exports = CategoryModel;
