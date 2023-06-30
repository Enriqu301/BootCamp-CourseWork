const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Build a connection
require("./connections/mongoconnection");

// import models
const { FormModel } = require("./models/FormModel");

// Write queries

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/createData", (req, res) => {
  const { fname, lname, age, isAlive } = req.query;

  const doc = {
    fname,
    lname,
    age: Number(age),
    isAlive: isAlive === "true"
  }

  FormModel.create(doc, (err, result)=>{
    if(!err){
      console.log(result)
      res.render('results.ejs', {data: result})
    } else {
      console.log("error: ", err)
      res.render('error.ejs')
    }
  })


});

app.get("*", (req, res) => {
  res.render("error.ejs");
});

app.listen(port, () => console.log(`Mongo Form app on port ${port}`));
