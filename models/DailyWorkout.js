const mongoose = require('mongoose');

const DailyWorkoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
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
    },

    reps: {
      type: Number,
    },

    sets: {
      type: Number,
    },

    distance: {
      type: Number,
    }
  }]
});

module.exports = mongoose.model('DailyWorkout', DailyWorkoutSchema);