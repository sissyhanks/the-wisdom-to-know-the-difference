const express = require('express');
const router = express.Router();
const path = require("path");

// const Story = require ('../models/Story');

//add stories / Show add page
//Get /stories/add
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


module.exports = router;