const express = require("express");
const router = express.Router();
const fs = require("fs");

// =========================Login Auth=========================================
router.post("/", (req, res) => {
  const { username, password } = req.body;

  const readUsers = fs.readFileSync("./data/User.json");
  const users = JSON.parse(readUsers);

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  user.password = "UNAUTHORIZED";
  // console.log(user);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(401).send("Username or password incorrect");
  }
});

// =========================Registration=========================================
router.put("/register", (req, res) => {
  const { username, password } = req.body;

  const readUsers = fs.readFileSync("./data/User.json");
  const users = JSON.parse(readUsers);

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    res.status(400).send("Username already taken");
  } else {
    users.push({ username, password });
    fs.writeFileSync("./data/User.json", JSON.stringify(users));
    res.status(200).send("Registration successful");
  }
});

module.exports = router;
