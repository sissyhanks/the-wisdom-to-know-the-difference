const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
// const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env'});

// connectDB();
const app = express();

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

const PORT = process.env.PORT || 3031;

const db = require("./models");



app.use(logger("dev"));



app.use(express.static("public"));

app.use('/', require('./routes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessjourney", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`your fitness journey begins on ${PORT}`);
});