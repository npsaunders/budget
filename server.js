const express = require("express");
const budgets = require("./models/budget.js");
const app = express();
const port = 3000;

// Routes
app.get("/budgets", (req, res) => {
  res.render("index.ejs", {
    budget: budgets
  })
})

app.get("/budgets/:indexBudget", (req, res) => {
  res.render("show.ejs", {
    budget: budgets[req.params.indexBudget]
  })
})

// Listener
app.listen(port, () => {
  console.log("Listening...");
})