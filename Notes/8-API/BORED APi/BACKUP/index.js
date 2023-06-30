const { response } = require('express');
const express = require('express');
const app = express();
const logger = require('morgan');
const $fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;

app.use(express.static('Public'));
app.use(logger('dev'))
app.set('view engine', 'ejs');


//Documentation
https://www.boredapi.com/documentation

//BaseURL
var BaseURL = `http://www.boredapi.com/api/activity/`
//Use array to help build out our form
let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]


//Routes
app.get('/', (req,res)=> {
    res.render('home', { types })
})

//Getting a random activity
app.get('/random', (req,res)=> {
    let endpoint = BaseURL;
    $fetch(endpoint)
    //.then Grabs response.json
    .then(response => {
        return response.json()
    })
    //.then takes previous .then and consumes it in "data"
    .then(data => {
        // console.log(data)
        res.render('results', { data });
    })
    //this will be our error 
    .catch(err => {
        console.log(err)
        res.render('error', {data: "Oops something wernt wrong try again"})
    })
})


//User selecting a type of activity 
app.get('/selected', (req,res)=> {
    //example route for the endpoint: 
    const { type } = req.query
    let route = `?type=`


    let endpoint = `${BaseURL}${route}${type}`
    // console.log(endpoint)
    $fetch(endpoint)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // console.log(data)
        res.render('results', { data })
    })
    .catch(err => {
        res.render('error', { data: "Oopsies cant get a selecting activity"})
    })
})

//Select Activiy based on number of people
app.get('/participants', (req,res)=> {
    //http://www.boredapi.com/api/activity?participants=1
    const {number} = req.query
    let route = `?participants=`
    let endpoint = `${BaseURL}${route}${number}`
    console.log(endpoint)

    $fetch(endpoint)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        res.render('results', { data })
    })
    .catch(err => {
        res.render('error', { data: "NOO"})
    })
    

})



app.listen(PORT, ()=> {console.log(`App listening on PORT: ${PORT}`)})