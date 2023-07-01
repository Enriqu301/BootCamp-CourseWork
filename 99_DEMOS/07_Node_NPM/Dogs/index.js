const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
const breeds = require("canis-familiaris");
const random_name = require("node-random-name");

// route handler that takes only one parameter
// a number
// use that number to return that many random dog breeds
app.get("/:num", (req, res) => {
  if (isNaN(req.params.num)) {
    res.send("Must be a numerical value");
  } else {
    let results = breeds.random(`${req.params.num}`);
    res.send(results);
  }
});

// /kennel/:num
// create an array of objects
// 2 properties - breed, name
// breed will be from canis-familiaris
// name = random name from random name package
app.get("/kennel/:num", (req, res) => {
  let results = [];
  for(let i = 1; i <= req.params.num; i++){
    let obj = {
      breed: breeds.random(),
      name: random_name({first: true})
    }
    results.push(obj)
  }
  res.send(results)
});

app.get("/", (req, res) => {
  res.send("I am the root route");
});

app.get("/dog", (req, res) => {
  res.send("I am the dog route");
});

app.get("*", (req, res) => {
  res.send("Hey!!! No route for you!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Dog app on port ${port}`));
