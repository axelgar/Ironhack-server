'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'staff', 'ta', 'teacher', 'student'],
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  description: {
    type: String
  },
  profilePic: {
    type: String,
    default: 'https://thevoicefinder.com/wp-content/themes/the-voice-finder/images/default-img.png'
  },
  projects: [{
    title: String,
    presLink: String,
    deployLink: String,
    module: {
      type: String,
      enum: ['M1', 'M2', 'M3']
    }
  }],
  linkedin: {
    type: String
  },
  github: {
    type: String
  },
  cohort: {
    type: ObjectId,
    ref: 'Cohort'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
