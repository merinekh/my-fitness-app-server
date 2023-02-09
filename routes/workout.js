const data = require("../data/AllExercices.json");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
// =========================create a GET route for workouts=========================================
router.get("/", (req, res) => {
  const readWorkouts = fs.readFileSync("./data/AllExercices.json");
  const workouts = JSON.parse(readWorkouts);

  res.json(workouts);
  // res.send(data);
});

module.exports = router;
