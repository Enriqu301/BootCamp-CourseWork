// const {add, subtract} = require('./testMe')
// console.log('add demo: ', add(2,3))
// console.log('subtract demo: ', subtract(2,3))

const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("public"));
const { fakeData } = require("./fakeData");
console.log(fakeData);

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  const fullName = (a, b) => {
    return `${a} ${b}`;
  };
  res.render("results.ejs", { cat: fakeData, getName: fullName });
  // res.render('about.ejs')
});

app.get("/doggy", (req, res) => {
  let { fname, lname, nice } = req.query;
  let obj = {
    fname,
    lname,
    niceGuy: nice === "yes" ? true : false
  }
  fakeData.push(obj)
  // res.render('results.ejs', {cat: [obj], getName: ()=>{}})
  res.render('results.ejs', {cat: [obj], getName: ""})
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Full EJS app listening on port ${port}`));
