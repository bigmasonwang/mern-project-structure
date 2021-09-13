const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  entryDate: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
