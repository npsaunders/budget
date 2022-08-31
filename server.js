const express = require("express");
const budgets = require("./models/budget.js");
const app = express();
const port = 3000;

// Routes

// Index
app.get("/budgets", (req, res) => {
  res.render("index.ejs", {
    budget: budgets
  })
})

// N
app.get("/budgets/new", (req, res) => {
  res.render("new.ejs")
})

// D
// U
// C
// E

// Show
app.get("/budgets/:indexBudget", (req, res) => {
  res.render("show.ejs", {
    budget: budgets[req.params.indexBudget]
  })
})



// Listener
app.listen(port, () => {
  console.log("Listening...");
})