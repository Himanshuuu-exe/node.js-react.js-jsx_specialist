// app.js

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Import routes
const quoteRoutes = require('./routes/quoteRoutes');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/user');

const app = express();

// Database connection
//const dbURI = 'YOUR_MONGODB_CONNECTION_STRING'; // IMPORTANT: Replace this with your MongoDB connection string
const dbURI = 'mongodb+srv://himanshu2005:himanshu2005%40@nodenet.jualkf.mongodb.net/nodeNet?retryWrites=true&w=majority&appName=nodeNet';

mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.json()); // for parsing json data

// Session middleware setup
app.use(
  session({
    secret: 'a secret key to sign the cookie',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: dbURI }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // cookie expires in 1 day
    }
  })
);

// Middleware to make user info available in all views
app.use(async (req, res, next) => {
    if (req.session.userId) {
        res.locals.user = await User.findById(req.session.userId);
    } else {
        res.locals.user = null;
    }
    next();
});

// Routes
app.get('/', (req, res) => res.redirect('/quotes'));
app.use('/quotes', quoteRoutes);
app.use(authRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});