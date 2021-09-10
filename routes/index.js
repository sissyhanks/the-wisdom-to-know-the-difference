const express = require('express');
const router = express.Router();
const htmlRoutes = require('./html');
const apiRoutes = require('./api');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;