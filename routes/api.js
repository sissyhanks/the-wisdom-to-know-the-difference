const express = require('express');
const router = express.Router();
const path = require("path");

const db = require('../models/index')

//process add stories
//post api/workouts


router.get("/workouts", (req, res) => {
  db.Workout.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
              totalDistance: {
                $sum: '$exercises.distance'
              }
            },
          },
        ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
              totalDistance: {
                $sum: '$exercises.distance'
              }
            },
          },
        ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id }, { exercises: req.body }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;