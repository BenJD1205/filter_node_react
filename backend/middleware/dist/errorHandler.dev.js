"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorResponse = require('../utils/errorResponse');

var errorHandler = function errorHandler(err, req, res, next) {
  console.log(err);

  var error = _objectSpread({}, err);

  error.message = err.message;

  if (err.name === "CastError") {
    var message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    var _message = "Dupicate field value entered";
    error = new ErrorResponse(_message, 400);
  }

  if (err.name === "ValidationError") {
    var _message2 = Object.values(err.errors).map(function (error) {
      return error.message;
    }).join(", ");

    error = new ErrorResponse(_message2, 400);
  } //add more check


  res.status(error, statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;