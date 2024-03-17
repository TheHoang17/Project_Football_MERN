var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim:true

  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    required: false
  },
  birthday: {
    type: String,
    required: false
  },
  age: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  role:   {
      type: String,
      default: 'user',
      enum: ['user', 'admin']
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
