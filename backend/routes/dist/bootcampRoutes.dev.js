"use strict";

var express = require('express');

var router = express.Router();

var bootcampControllers = require('../controllers/bootcampControlles'); //@route = api/v1/bootcamps


router.route('/').get(bootcampControllers.getAllBootcamps).post(bootcampControllers.createNewBootamp); //@route = api/v1/bootcamps/someid

router.route('/:id').put(bootcampControllers.updateBootcampById)["delete"](bootcampControllers.deleteBootcampById);
module.exports = router;