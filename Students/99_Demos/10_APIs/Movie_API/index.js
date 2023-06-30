// {
//   genres: [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' }
//   ]
// }


const express = require("express");
const request = require("request");
const app = express();

// allows access to .env file
require("dotenv").config();

// destructure only the info we need
let { TMDB_API_KEY } = process.env;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs", {doggy: []});
});

// https://api.themoviedb.org/3/movie/now_playing?api_key=4de3f13a4cdd05831b95a97d3b3e2da6
const baseUrl = "https://api.themoviedb.org/3";

app.get("/getMovies", (req, res,) => {
  let route = "movie/now_playing";
  let query = `api_key=${TMDB_API_KEY}`;
  let endpoint = `${baseUrl}/${route}?${query}`;

  // NOTE: 4 things ALL HTTP requests do/need!!
  // 1) utilize endpoint (and method)
  // 2) if ok - parse our response
      // throw error
  // 3) do something with data
  // 4) handle errors
  request(endpoint, (error, response, body) => {
    if(!error && response.statusCode === 200){
      let data = JSON.parse(body)
      res.render("home.ejs", {doggy: data.results})
    } else {
      console.log(error)
      res.render('error.ejs')
    }
  });
});

app.get('/showDetails/:id', (req, res)=>{
  console.log(req.params.id)
  let endpoint = `https://api.themoviedb.org/3/movie/${req.params.id}/reviews?api_key=${TMDB_API_KEY}`
  console.log(endpoint)
  request(endpoint, (error, response, body)=>{
    if(!error && response.statusCode === 200){
      let data = JSON.parse(body)
      // res.send(data.results)
      res.render("reviews.ejs", {reviews: data.results})
    } else {
      console.log(error)
      res.render('error.ejs')
    }
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Movie API listen on port ${port}`));
