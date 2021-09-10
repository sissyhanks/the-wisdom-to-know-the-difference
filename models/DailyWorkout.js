const mongoose = require('mongoose');
const exercise = { discriminatorKey: 'kind' };

const DailyWorkoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now
  },
}, exercise);

module.exports = mongoose.model('DailyWorkout', DailyWorkoutSchema);