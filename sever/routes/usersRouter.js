const express = require('express');
const usersRouter = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('../models/user');
const authenticate = require('../authenticate');
const { userValidationResult, userValidator } = require('../middlewares/userValidator')

usersRouter.use(bodyParser.json());

usersRouter.post('/signup',userValidator, userValidationResult,(req, res, next) => {
  console.log(req.body); // In ra giá trị của req.body
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, (err, user)=> {
    if(err) {
      res.status(500).json({ error: err.message });
    }
    else {
      if (req.body.firstname) user.firstname = req.body.firstname;
      if (req.body.lastname) user.lastname = req.body.lastname;
      if (req.body.phone) user.phone = req.body.phone;
      if (req.body.confirmPassword) user.confirmPassword = req.body.confirmPassword;

      user.save()
        .then(() => {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
            });
        })
        .catch((err) => {
          // res.status(500).json({ error: err.message });
          res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
      });
    }
  });
});


usersRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  const user = req.user; // Generate JWT token
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token,user: user, status: 'You are successfully logged in!' }); // Include token in response
});


usersRouter.get('/logout', authenticate.verifyUser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, status: 'Logout Successful!' });
});

usersRouter.put('/about', authenticate.verifyUser, async (req, res) => {
  
  try {
    const user = await User.findById(req.user._id);
    const { firstname,lastname, email, address, age, birthday, phone } = req.body;
    // validation + Update
    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;
    if (address) user.address = address;
    if (age) user.age = age;
    if (birthday) user.birthday = birthday;
    if (phone) user.phone = phone;
    //save user
    await user.save();
    res.status(200).send({
      success: true,
      message: "User Profile Updated",
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).send({
      success: false,
      message: "Error updating user profile",
      error: error.message
    });
  }
});


module.exports = usersRouter;