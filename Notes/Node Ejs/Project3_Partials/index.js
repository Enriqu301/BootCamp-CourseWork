const express = require ('express')
const app = express();
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.redirect('/home');
})

app.get('/home', (req, res)=>{
    res.render("home.ejs")
})

app.get('/about', (req, res)=>{
    res.render("about.ejs")
})

app.get('/contact', (req, res)=>{
    res.render("contact.ejs")
})


const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`EJS form app on port ${port}`))