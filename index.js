const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var cors = require("cors");
const workoutRoutes = require("./routes/workout");

app.use(cors());
app.use(express.json());

// NEW CODE
app.use(express.static("public"));
// END OF NEW CODE
app.use("/exercices", workoutRoutes);
// This displays message that the server running and listening to specified port

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
