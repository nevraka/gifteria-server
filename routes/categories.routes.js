const express = require('express');
const router = express.Router();

let CategoryModel = require('../models/Category.model');

router.get('/categories', (req, res) => {
  CategoryModel.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
