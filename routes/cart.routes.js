const express = require('express');
const router = express.Router();

let UserModel = require('../models/User.model');

// router.get('/products', (req, res) => {
//   ProductModel.find()
//     .then((products) => {
//       res.status(200).json(products);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: 'Something went wrong',
//         message: err,
//       });
//     });
// });

module.exports = router;
