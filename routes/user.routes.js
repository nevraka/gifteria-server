const router = require('express').Router();
const User = require('../models/User.model');

const loggedIn = require('../middleware/loggedIn');
