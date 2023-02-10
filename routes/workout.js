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

// =========================create a GET route for equipment=========================================
router.get("/equipments", (req, res) => {
  const readList = fs.readFileSync("./data/listOfEquipments.json");
  const list = JSON.parse(readList);

  res.json(list);
  // res.send(data);
});

// =========================create a GET route for equipment=========================================
router.get("/favorite", (req, res) => {
  const readList = fs.readFileSync("./data/favorite.json");
  const list = JSON.parse(readList);

  res.json(list);
  // res.send(data);
});

// ==================create a POST request for new Video==========================================

router.put("/favorite", (req, res) => {
  const readExercices = fs.readFileSync("./data/favorite.json");
  const exercices = JSON.parse(readExercices);

  let addFav = true;
  exercices.map((element) => {
    if (element.id === req.body.id) {
      addFav = false;
    }
  });
  console.log(addFav);

  if (addFav) {
    exercices.push(req.body);
    res.send(exercices);

    fs.writeFileSync("./data/favorite.json", JSON.stringify(exercices));
    res.status(201).send("Exercice Uploaded Thank You!");
  } else {
    res.send("Exercice Already Uploaded Thank You!");
  }
});

module.exports = router;
