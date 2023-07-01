const express = require('express');
const app = express();
const $fetch = require("node-fetch");
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
// Foundation


// CSS, View engine, logger
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(logger('dev'));


//Base Route
let baseURL = `https://www.boredapi.com/api/activity`

// Use the types provided in documentation to build our form
let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

// Routes
app.get('/', (req, res) => {
    res.render('home', {types})
})

// Get random activity
app.get('/random', (req, res) => {
    $fetch(baseURL) // Pass the endpoint
    .then(response => {
       return  response.json()
    }) // Wait for the response and parse the data
    .then(data => {
        //console.log(data)
        res.render('results', {data}) // Once data is good to go send it to page
    })
    .catch(err => {
        console.log("Error fetching random activity: ", err) // Something has gone wrong in our chain of command - we need to handle the sad case
        res.render('home')
    })
})

// Let user Select an "Type"
app.get('/selected', (req, res) => {
    let route = `?type=`

    let { type } = req.query 

    let endpoint = `${baseURL}${route}${type}`
    console.log(endpoint)
    $fetch(endpoint)
    .then(response => {return response.json()
    })
    .then(data => {
        console.log(data)
        res.render('results', { data })
    })
    .catch()

})



//https://www.boredapi.com/api/activity?participants=1
// 1-5 // error above 6

// Let user select by amount of people participating
app.get('/participants', (req, res) => {
    res.render('results')
})

// Listener
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`)});
