const express = require("express");
const app = express();

// need to have access to styles
app.use(express.static("public"));

// needed for making http requests
const request = require('request')

// error handling
// what are our endpoints? data? how much?
// how are we making our http request?

app.get("/", (req, res) => {
  // render files
  res.redirect("/home");
});



app.get("/home", (req, res) => {
  console.log(req.doggy)
  res.render("home.ejs", {imgSrc: ""});
});

// NOTE: endpoint from docs for reference
// https://dog.ceo/api/breeds/image/random

// NOTE: so we can use for other route handelrs if needed
const baseUrl = "https://dog.ceo/api";

// button user clicks on to get our data
//   1) user click on a button
//   2) this is going to trigger a request
//   3) get data
//   4) do something with that data
app.get("/getImage", (req, res) => {
  let route = "/breeds/image/random";
  let endpoint = `${baseUrl}/${route}`;

  // 1) utilize an endpoint
  // 2) if everything is ok - parse our response
  //      else throw errors
  // 3) do something with the parsed data
  // 4) handle any errors
  request(endpoint, (error, response, body)=>{
    if(!error && response.statusCode === 200){
      let data = JSON.parse(body)
      res.render('home.ejs', {imgSrc: data.message})
      // res.send(data)
    } else {
      res.render('error.ejs')
    }
  })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend dog image app on port ${port}`));
