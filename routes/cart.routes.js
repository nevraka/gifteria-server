const express = require('express');
const router = express.Router();
const isLoggedIn = require('./utils').isLoggedIn;

let UserModel = require('../models/User.model');

router.post('/cart', isLoggedIn, (req, res) => {
  const { productId } = req.body;
  const userId = req.session.loggedInUser._id;

  UserModel.findById({ _id: userId })
    .then((user) => {
      const item = user.cart.find((c) => {
        return c.product.toString() === productId;
      });
      if (item) {
        item.quantity++;
      } else {
        user.cart.push({ product: productId, quantity: 1 });
      }
      user.save();
      res.status(200).json(user.cart);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

router.get('/cart', isLoggedIn, (req, res) => {
  const userId = req.session.loggedInUser._id;

  UserModel.findById({ _id: userId })
    .then((user) => {
      res.status(200).json(user.cart);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

router.put('/cart', isLoggedIn, (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.session.loggedInUser._id;

  UserModel.findById({ _id: userId })
    .then((user) => {
      const item = user.cart.find((c) => {
        return c.product.toString() === productId;
      });
      if (item) {
        item.quantity = quantity;
      } else {
        user.cart.push({ product: productId, quantity: quantity });
      }
      user.save();
      res.status(200).json(user.cart);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

router.delete('/cart', isLoggedIn, (req, res) => {
  const { productId } = req.body;
  const userId = req.session.loggedInUser._id;

  UserModel.findById({ _id: userId })
    .then((user) => {
      user.cart = user.cart.filter((c) => {
        return c.product.toString() !== productId;
      });
      user.save();
      res.status(200).json(user.cart);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
