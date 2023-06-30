const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  // Do something - ANYTHING!!!!
  // req.doggy = "snore!!!"
  // req.doggy = () => "drool";

  // making a call to movie api /movies
  // req.movies = array of all data from API
  next();
});

app.get("/", (req, res) => {
  // console.log(req.doggy());
  // make call to movie api /genres
  // let genres  = parsed genres
  // some function that filters req.movies based on genres with Family
  res.send("I am the another one");
});

const likesCats = (req, res, next) => {
  // req.animal = "cat"
  req.animal = "elephants"
  return next()
};

app.get("/dog", likesCats, (req, res) => {
  console.log(req.animal === "cat" ? "Yummy" : "Gross")
  res.send("I am the second root");
});

app.get('/cat', likesCats, (req, res)=>{
  res.status(222).json(req.animal.length)
  // do soemthing else
})

app.listen(port, () => console.log(`Middleware app on port ${port}`));
