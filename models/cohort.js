'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Unit = require('./unit');

const cohortSchema = new Schema({
  teacher: [{
    type: ObjectId,
    ref: 'User'
  }],
  tas: [{
    type: ObjectId,
    ref: 'User'
  }],
  students: [{
    type: ObjectId,
    ref: 'User'
  }],
  type: {
    type: String,
    enum: ['webdev', 'ux-ui'],
    required: true
  },
  location: {
    type: String,
    enum: ['bcn'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  days: [{
    type: ObjectId,
    ref: 'Day'
  }],
  adaptiveCurriculum: [{
    type: ObjectId,
    ref: 'Unit'
  }],
  parkingLot: [Unit.schema],
  language: {
    type: String,
    enum: ['es', 'en'],
    required: true
  },
  nickname: {
    type: String
  },
  images: []
});

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;
