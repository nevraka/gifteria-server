const express = require('express');
const router = express.Router();

require('../models/Category.model');
let ProductModel = require('../models/Product.model');

router.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;

  ProductModel.findOne({ _id: productId })
    .populate('category')
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

router.get('/products', (req, res) => {
  const category = req.query.category;
  let filter = {};
  if (category) {
    filter = { category };
  }

  ProductModel.find(filter)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
