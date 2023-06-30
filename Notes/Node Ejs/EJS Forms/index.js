const express = require ('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))

app.use(express.static('public'))




app.get('/', (req, res)=>{
    res.send("GROOT ROUTE")
})



app.get('/home', (req, res)=>{
    res.render("home.ejs")
})



app.get('/contact', (req, res)=>{
    res.render("contact.ejs")
})



//pull data user sends in our contact page in the doggy action form 
app.get('/doggy', (req, res)=>{
    // let fname = req.query.fname
    // let lname = req.query.lname
    // let zombie = req.query.zombie
    let {fname, lname, zombie,} = req.query

    


    res.render('result.ejs', {fname,lname,zombie});
})



app.get('/about', (req, res)=>{
    res.render("about.ejs")
})


const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`EJS form app on port ${port}`))