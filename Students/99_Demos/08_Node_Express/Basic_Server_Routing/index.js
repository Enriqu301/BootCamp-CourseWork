// FOUNDATION
const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
const food = require('superfood')

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("I am the home page");
});

// get /food and sends back a response of ONE random superfood.
app.get('/food', (req, res)=>{
  let result = food.random()
  res.send(result)
})

// get /food/group send back a response of 5 foods
app.get('/food/group', (req, res)=>{
  let foods = []
  for(let i = 1; i <= 5; i++){
    foods.push(food.random())
  }
  res.send(foods)
})

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Basic Server Logger is listening on port ${port}`)
);
