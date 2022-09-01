// DEPENDENCIES -------------------------
const express = require("express");
const budgets = require("./models/budget.js");
const app = express();
const port = 3000;

// MIDDLEWARE --------------------------- 
app.use(express.urlencoded({ extended: false }));


// ROUTES -------------------------------

// I - INDEX
app.get("/budgets", (req, res) => {
  res.render("index.ejs", {
    budget: budgets
  })
})

// N - NEW
app.get("/budgets/new", (req, res) => {
  res.render("new.ejs")
})

// D
// U
// C - CREATE
app.post("/budgets", (req, res) => {
  budgets.push(req.body)
  res.redirect("/budgets")
})

// E

// S - SHOW
app.get("/budgets/:indexBudget", (req, res) => {
  res.render("show.ejs", {
    budget: budgets[req.params.indexBudget]
  })
})



// Listener
app.listen(port, () => {
  console.log("Listening...");
})