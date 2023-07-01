const express = require('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))

app.get('/', (req, res)=>{
  res.send("I am the Groot route!")
}) 

app.get('/fruits', (req, res)=>{
  res.send(" I am the fruits")
})

app.get('/:fruits', (req, res)=>{
  // params = variable inside our route
  // console.log(req.params.doggy)
  res.send(`I am the ${req.params.fruits} route`)
})

// get /bank/your name/account/money in your account
// send back a response that consists of the name and money
app.get('/bank/:name/account/:money', (req, res)=>{
  // let name = req.params.name
  // let money = req.params.money
  let {name, money} = req.params
  res.send(`Hello ${name}. You have $${money}.`)
})



const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server with parameter on port ${port}`))