const express = require('express');
const router = express.Router();
const path = require("path");


//this route will open the exercise html page 
//Get /exercise
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// this route takes user to dashboard 
//GET /stats
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;