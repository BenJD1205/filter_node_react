"use strict";

var mongoose = require('mongoose');

var bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name to the bootcamp'],
    unique: true
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating to the bootcamp']
  },
  description: {
    type: String,
    required: [true, 'Please provide bootcamp width description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide by id route']
  }
});
var Bootcamp = mongoose.model('Bootcamp', bootcampSchema);
module.exports = Bootcamp;