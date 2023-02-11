const express = require("express");
const router = express.Router();
const fs = require("fs");

// =========================create a GET route for workouts=========================================
router.get("/", (req, res) => {
  const readUsers = fs.readFileSync("./data/User.json");
  const userss = JSON.parse(readUsers);

  res.json(users);
  // res.send(data);
});

module.exports = router;
