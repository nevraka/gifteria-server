// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
const { MONGO_URI } = require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app);

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 24 * 60 * 60, // your cookie will be cleared after these seconds
    },
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      // Time to Live for sessions in DB. After that time it will delete it!
      ttl: 24 * 60 * 60, // your session will be cleared after these seconds
    }),
  })
);

app.use((req, res, next) => {
  // req.app.locals.profilePic = "images/default-avatar.png"
  // if (req.app.locals.isLoggedIn) {
  //    req.app.locals.profilePic = req.session.loggedInUser.profilePic
  // }
  req.app.locals.isLoggedIn = !!req.session.loggedInUser;
  next();
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require('./routes');
app.use('/api', allRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);

const productRoutes = require('./routes/product.routes');
app.use('/api', productRoutes);

const categoryRoutes = require('./routes/categories.routes');
app.use('/api', categoryRoutes);

const cartRoutes = require('./routes/cart.routes');
app.use('/api', cartRoutes);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + '/public/index.html');
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
