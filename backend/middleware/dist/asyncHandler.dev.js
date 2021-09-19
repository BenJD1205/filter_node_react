"use strict";

var asyncHandler = function asyncHandler(controllerfunction) {
  return function (req, res, next) {
    return Promise.resolve(controllerfunction(req, res, next))["catch"](next);
  };
};

module.exports = asyncHandler;