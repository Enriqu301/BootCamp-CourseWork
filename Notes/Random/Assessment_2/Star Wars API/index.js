// Foundation
const express = require('express')
const app = express()
const port = process.env.PORT || 3000


// CSS, View engine,
app.set('view engine', 'ejs');
app.use(express.static('public'));


//Base Route
let baseURL = `https://swapi.dev/api/`


app.get('/', (req, res)=>{
    res.redirect('/home')
})

app.get('/home', (req, res)=>{
    res.render('home.ejs')
})


// Get Results
app.get('/results', (req,res)=> {
    $fetch(baseURL)
    .then()
    .then()
    .catch()
    res.render('results.ejs')
})






















app.listen(port, ()=> console.log(`StarWarsAPI listening on port ${port}`))