const express = require("express");
const budgets = require("./models/budget.js");
const app = express();
const port = 3000;

// Routes
app.get("/", (req, res) => {
  res.send("hi")
})

// Listener
app.listen(port, () => {
  console.log("Listening...");
})