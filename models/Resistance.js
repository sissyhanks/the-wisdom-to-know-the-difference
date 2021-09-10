const mongoose = require('mongoose');
const options = { discriminatorKey: 'kind' };
const DailyWorkout = require('./DailyWorkout');

const Resistance = DailyWorkout.discriminator('Resistance',
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

    weight: {
      type: Number,
      required: true,
      trim: true  
    },

    reps: {
      type: Number,
      required: true,
      trim: true  
    },

    sets: {
      type: Number,
      required: true,
      trim: true  
    },
  }, options ));

module.exports = mongoose.model('Resistance', Resistance);