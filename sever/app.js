const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routes/usersRouter');
const authenticate = require('./authenticate');
const config = require('./config');
const cors = require('cors');
const app = express();
const port = 3000;

// Connect to MongoDB
const url = config.mongoUrl;
const connect = mongoose.connect(url);
app.use(cors());

connect.then(
  (db) => {
    console.log('Connected to the database');

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  },
  (err) => {
    console.error('Error connecting to the database:', err);
  }
);

// Session 
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Mount routers
app.use('/users', userRouter);
app.use(authenticate.verifyUser); // Using JWT for authentication
