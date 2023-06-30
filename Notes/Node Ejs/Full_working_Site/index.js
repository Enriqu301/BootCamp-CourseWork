const express = require ('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.static('public'))
const {fakeData} = require('./fakeData')


app.get('/', (req, res)=>{
    res.redirect('/home');
})


app.get('/home', (req, res)=>{
    res.render("home.ejs")
})


app.get('/contact', (req, res)=>{
    res.render("contact.ejs")
})


app.get('/about', (req, res)=>{
    res.render("results.ejs", {cat:fakeData})
})


const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`EJS form app on port ${port}`))