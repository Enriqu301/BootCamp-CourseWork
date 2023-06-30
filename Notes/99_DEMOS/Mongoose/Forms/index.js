const express = require('express')
const app = express ()
const port = process.env.PORT || 3000

//Build a Connection
//You must connect directly to it
require('./connections/mongoconnection')

//Import Models
const {FormModel}  = require('./models/FormModel')

// Write Queries

app.get('/', (req,res)=>{
    res.redirect('/home')
})

app.get('/home', (req,res)=>{
    res.render('home.ejs')
})

app.get('/createData', (req,res)=>{
    const { fname, lname, age, isAlive} = req.query;

    const doc = {
        fname,
        something,
        age: Number(age),
        isAlive: isAlive === "true"
    }

    //Creates using the model
    FormModel.create(doc, (err,result)=> {
        if(!err){
            res.render('results.ejs')
        } else {
            console.log("error: ", err)
            res.render('error.ejs')
        }
    })
});

app.get('*', (req,res)=>{
    res.render('error.ejs')
})

app.listen(port, ()=> console.log(`Mong FOrm app on port ${port}`))