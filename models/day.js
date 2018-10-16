'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Unit = require('./unit');

const daySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  units: [Unit.schema]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
