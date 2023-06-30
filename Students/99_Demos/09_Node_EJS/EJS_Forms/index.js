const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/doggy", (req, res) => {
  // let fname = req.query.fname
  // let lname = req.query.lname
  // let zombie = req.query.zombie
  // NOTE: does the same thing as the above 3 lines
  let { fname, lname, zombie } = req.query;


  res.render('result.ejs', {doggy: fname, 
                            lname, 
                            zombie})
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`EJS form app on port ${port}`));
