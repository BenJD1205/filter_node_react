"use strict";

require('dotenv').config();

var express = require('express');

var connectDB = require('./config/db');

var errorHandler = require('./middleware/errorHandler');

var myRoute = require('./routes/bootcampRoutes');

connectDB();
var app = express(); //middleware

app.use(express.json()); //routes

app.use('/api/v1/bootcamps', myRoute); //Error handler

app.use(errorHandler);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Sever is running on ".concat(PORT));
});