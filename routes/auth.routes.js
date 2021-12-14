const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.model');
const isLoggedIn = require('./utils').isLoggedIn;

router.post('/signup', (req, res) => {
  let { name, surname, address, email, password } = req.body;

  // -----SERVER SIDE VALIDATION ----------

  if (!name || !surname || !address || !email || !password) {
    res.status(400).json({
      errorMessage: 'Please enter name, surname, address, email, and password',
    });
    return;
  }
  const myRegex = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!myRegex.test(email)) {
    res.status(500).json({
      errorMessage: 'Email format not correct',
    });
    return;
  }
  // const myPassRegex = new RegExp(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  // );
  // if (!myPassRegex.test(password)) {
  //   res.status(500).json({
  //     errorMessage:
  //       'Password needs to have 8 characters, a number and an Uppercase alphabet',
  //   });
  //   return;
  // }

  // NOTE: We have used the Sync methods here.
  // creating a salt
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  UserModel.create({ name, surname, address, email, password: hash })
    .then((user) => {
      // ensuring that we don't share the hash as well with the user
      user.password = undefined;
      console.log(JSON.stringify(user));
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          errorMessage: 'username or email entered already exists!',
          message: err,
        });
      } else {
        res.status(500).json({
          errorMessage: 'Something went wrong! Go to sleep!',
          message: err,
        });
      }
    });
});

// will handle all POST requests to http:localhost:5005/api/signin
router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // -----SERVER SIDE VALIDATION ----------
  /*
    if ( !email || !password) {
        res.status(500).json({
            error: 'Please enter Username. email and password',
       })
      return;
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[0^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
            error: 'Email format not correct',
        })
        return;
    }
    */

  // Find if the user exists in the database
  UserModel.findOne({ email })
    .then((userData) => {
      //check if passwords match
      let doesItMatch = bcrypt.compareSync(password, userData.password);
      //if it matches
      console.log('doesItMatch', doesItMatch);

      if (doesItMatch) {
        // req.session is the special object that is available to you
        userData.password = undefined;
        req.session.loggedInUser = userData;
        res.status(200).json(userData);
      } else {
        // if passwords do not match
        res.status(500).json({
          error: "Passwords don't match",
        });
        return;
      }
    })
    .catch((err) => {
      // throw an error if the user does not exists
      console.log(err);
      res.status(500).json({
        error: 'Email does not exist',
        message: err,
      });
      return;
    });
});

// will handle all POST requests to http:localhost:5005/api/logout
router.post('/signout', (req, res) => {
  req.session.destroy();
  // Nothing to send back to the user
  res.status(204).json({});
});

// middleware to check if user is loggedIn

// THIS IS A PROTECTED ROUTE
// will handle all get requests to http:localhost:5005/api/user
router.get('/user', isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
