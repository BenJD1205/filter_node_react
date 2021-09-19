"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bootcamp = require('../models/Bootcamp');

var asyncHandler = require('../middleware/asyncHandler');

var ErrorResponse = require('../utils/errorResponse');

exports.getAllBootcamps = asyncHandler(function _callee(req, res, next) {
  var query, uiValues, reqQuery, removeFields, filterKeys, filterValues, queryStr, sortByArr, sortByStr, bootcamps, maxPrice, minPrice;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          uiValues = {
            filtering: {},
            sorting: {}
          };
          reqQuery = _objectSpread({}, req.query);
          removeFields = ["sort"];
          removeFields.forEach(function (val) {
            return delete reqQuery[val];
          });
          filterKeys = Object.keys(reqQuery);
          filterValues = Object.values(reqQuery);
          filterKeys.forEach(function (val, idx) {
            return uiValues.filtering[val] = filterValues[idx];
          });
          queryStr = JSON.stringify(reqQuery);
          queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, function (match) {
            return "$".concat(match);
          });
          query = Bootcamp.find(JSON.parse(queryStr));

          if (req.query.sort) {
            sortByArr = req.query.sort.split(",");
            sortByArr.forEach(function (val) {
              var order;

              if (val[0] === "-") {
                order = "descending";
              } else {
                order = "ascending";
              }

              uiValues.sorting[val.replace("-", "")] = order;
            });
            sortByStr = sortByArr.join(" ");
            query = query.sort(sortByStr);
          } else {
            query = query.sort("-price");
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(query);

        case 13:
          bootcamps = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(Bootcamp.find().sort({
            price: -1
          }).limit(1).select("-_id price"));

        case 16:
          maxPrice = _context.sent;
          _context.next = 19;
          return regeneratorRuntime.awrap(Bootcamp.find().sort({
            price: 1
          }).limit(1).select("-_id price"));

        case 19:
          minPrice = _context.sent;
          uiValues.maxPrice = maxPrice[0].price;
          uiValues.minPrice = minPrice[0].price;
          res.status(200).json({
            success: true,
            data: bootcamps,
            uiValues: uiValues
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.createNewBootamp = asyncHandler(function _callee2(req, res, next) {
  var bootcamp;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Bootcamp.create(req.body));

        case 2:
          bootcamp = _context2.sent;
          res.status(201).json({
            success: true,
            data: bootcamp
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.updateBootcampById = asyncHandler(function _callee3(req, res, next) {
  var bootcamp;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Bootcamp.findById(req.params.id));

        case 2:
          bootcamp = _context3.sent;

          if (bootcamp) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", next(new ErrorResponse("Bootcamp with id ".concat(req.params.id, " was not found"), 404)));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            "new": true,
            runValidators: true
          }));

        case 7:
          bootcamp = _context3.sent;
          res.status(201).json({
            success: true,
            data: bootcamp
          });

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.deleteBootcampById = asyncHandler(function _callee4(req, res, next) {
  var bootcamp;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Bootcamp.findById(req.params.id));

        case 2:
          bootcamp = _context4.sent;

          if (bootcamp) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return", next(new ErrorResponse("Bootcamp with id ".concat(req.params.id, " was not found"), 404)));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(bootcamp.remove());

        case 7:
          res.status(201).json({
            success: true,
            data: {}
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
});