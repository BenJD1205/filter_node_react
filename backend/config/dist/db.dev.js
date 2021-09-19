"use strict";

var mongoose = require('mongoose');

var connString = process.env.DATABASE_CONNECTION;

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(connString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('Connect DB Success');
          _context.next = 11;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('Connect DB Fail');
          console.log(_context.t0);
          process.exit(1);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = connectDB;