const express = require('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))

app.get('/', (req, res)=>{
    res.send('GROOT ROUTE!')
})

app.get('/fruits', (req, res) =>{
    res.send("I am the fruits")
})

app.get('/:doggy', (req, res) =>{
    console.log(req.params.doggy)
    res.end(`I am the ${req.params.doggy} rout`)
})


//get /bank/your name/account/money in your account
//send back a response that consisits of the name and moneyh - $1000
app.get('/bank/:name/account/:money', (req,res)=>{

    let {name,money}
    res.send(`Hello ${req.params.name}. You have $${req.params.money}`)
})

const port = process.env.PORT || 3000 
app.listen(port, ()=> console.log(`Server with parameter on port ${port}`))