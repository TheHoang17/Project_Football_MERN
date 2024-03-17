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


usersRouter.put('/changePassword', authenticate.verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    // Kiểm tra xác thực mật khẩu cũ
    if (!user.authenticate(req.body.oldPassword)) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect old password'
      });
    }

    // Kiểm tra mật khẩu mới và mật khẩu xác nhận
    if (req.body.newPassword !== req.body.confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password and confirm password do not match'
      });
    }

    // Cập nhật mật khẩu mới
    user.setPassword(req.body.newPassword, async () => {
      await user.save();
      res.status(200).json({
        success: true,
        message: 'Password updated successfully'
      });
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({
      success: false,
      message: 'Error updating password',
      error: error.message
    });
  }
});
// ADMIN
//GET ACCOUNT
usersRouter.get('/', authenticate.verifyUser, async (req, res) => {
  try {
    // Lấy danh sách tất cả các tài khoản từ cơ sở dữ liệu có vai trò là 'user'
    const users = await User.find({ role: 'user' }, '-password');
    res.status(200).json(users); // Trả về danh sách tài khoản với mã trạng thái 200
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
});


//DELETE ACCOUNT
usersRouter.delete('/:userId', async (req, res) => {
  try {
    // Lấy userId từ request params
    const userId = req.params.userId;

    // Kiểm tra xem userId có hợp lệ không
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    // Kiểm tra xem người dùng có tồn tại không
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Xóa người dùng từ cơ sở dữ liệu
    await user.deleteOne();

    // Trả về kết quả thành công
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message
    });
  }
});
//UPDATE USER
usersRouter.put('/:userId', async (req, res) => {
  try {
    // Lấy userId từ request params
    const userId = req.params.userId;

    // Kiểm tra xem userId có hợp lệ không
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    // Kiểm tra xem người dùng có tồn tại không
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Cập nhật thông tin người dùng từ dữ liệu trong request body
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname;
    if (req.body.email) user.email = req.body.email;
    if (req.body.address) user.address = req.body.address;
    if (req.body.age) user.age = req.body.age;
    if (req.body.birthday) user.birthday = req.body.birthday;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.avatar) user.avatar = req.body.avatar;

    // Lưu người dùng đã được cập nhật
    await user.save();

    // Trả về kết quả thành công
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user: user
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({
      success: false,
      message: 'Error updating user',
      error: error.message
    });
  }
});






module.exports = usersRouter;