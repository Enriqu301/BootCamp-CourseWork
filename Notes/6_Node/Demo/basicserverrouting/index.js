
const express = require('express')
const app = express() // is using the NPM of epxress and calling it here to be used
const logger = require ('morgan')
app.use(logger('dev')) //adding the dev option to our app here
const food = require('superfood')

app.get('/', (req,res)=>{
    res.redirect("/home")
})

app.get('/home', (req,res)=>{
    res.send('I am the home page')
})


//ROUTE HANDLE REQUEST
//call for food NPM and send back a resonce of ONE random super food to the user 
app.get('/food', (req,res)=>{
    let result = food.random()
    res.send(result)
})

//get /food/group send back a response of 5 foods 
app.get('/food/group', (req,res)=>{
    let food = []
    for (let i=1; i<5; i++){
        food.push(food.random())
    }
    res.send(food)
})



const port = process.env.PORT || 3000;
app.listen(port, ()=> 
    console.log(`Basic Server Logger is listening on port ${port}`)
);