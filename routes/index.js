const express = require('express');
const router = express.Router();
const htmlRoutes = require('./html');

// const DailyWorkout = require ('../models/index');

router.use('/', htmlRoutes);


module.exports = router;