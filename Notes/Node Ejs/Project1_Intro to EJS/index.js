const express = require ('express');
const app = express();
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.redirect('/home');
})


app.get('/home', (req, res)=>{
    res.render("home.ejs", {pizza: "I like my pizza with extra pineapple."})
})


app.get('/about', (req, res)=>{
    res.render('about.ejs', {cappuccino: "I like my cappuccino to be sweet."});
})


app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {fries: "I like my fries crispy with extra salt."});
})



const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`EJS form app on port ${port}`))