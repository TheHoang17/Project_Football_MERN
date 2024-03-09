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
    type: Number,
  },
  role:   {
      type: String,
      default: 'user',
      enum: ['user', 'admin']
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
