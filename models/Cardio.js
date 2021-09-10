const mongoose = require('mongoose');
const options = { discriminatorKey: 'kind' };
const DailyWorkout = require('./DailyWorkout');

const Cardio = DailyWorkout.discriminator('Cardio',
  new mongoose.Schema({ 
    type: {
    type: String,
    required: true,
    trim: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    duration: {
      type: Number,
      required: true,
      trim: true      
    },

    distance: {
      type: Number,
      required: true,
      trim: true  
    },
  }, options ));

module.exports = mongoose.model('Cardio', Cardio);