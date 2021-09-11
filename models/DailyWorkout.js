//this model will allow data entered into the exercise from to be stored in the database >> the front end form is set up so user selects type of exercise they will engage in and then they will be presented with a form that only allows them to fill out info related to that type of exercise.

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
    },

    name: {
      type: String,
      required: true,
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
    },

    duration: {
      type: Number,
    }
  }]
  
});

const Workout = mongoose.model('Workout', DailyWorkoutSchema);

module.exports = Workout;