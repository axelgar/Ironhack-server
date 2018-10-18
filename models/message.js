'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = require('./user');

const messageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  user: [User.schema],
  picture: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
