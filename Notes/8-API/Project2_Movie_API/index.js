const express = require ('express');
const request = require ('request');
const app = express();
app.use(express.static('public'));


//allows access to .env file
require('dotenv').config()
//Destructure onlt the info we need
let {TMDB_API_KEY} = process.env

app.get('/', (req, res)=>{
    res.redirect('/home');
})


app.get('/home', (req, res)=>{
    res.render("home.ejs",{data: []});
});

const baseURL = "https://api.themoviedb.org/3"



app.get('/getMovies', (req, res)=>{
    let route = "movie/now_playing"
    let query = `api_key=b2c8f7c6184a71d5804984a5998c25c9`
    let endpoint = `${baseURL}/${route}?${query}`
    console.log(endpoint)

    // 4 things all HTTP requests
    // 1) utilize endpoint (and method)
    //2) if ok - parse our response
        // throw error
    //3) do something with data
    //4) handle errors


    request(endpoint, (error,response, body)=>{
        if(!error && response.statusCode === 200){
            let data = JSON.parse(body)
            res.render("home.ejs", {data: data.results} );
        } else {
            console.log(error)
            res.render('errorr.ejs')
        }
    });
});

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<b2c8f7c6184a71d5804984a5998c25c9>>&language=en-US&page=1



const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`Movie API app on port ${port}`))

