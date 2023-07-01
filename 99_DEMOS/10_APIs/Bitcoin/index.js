const express = require('express')
const app = express()

const $fetch = require('node-fetch')

app.get('/', (req, res)=>{
  res.redirect('/home')
})

app.get('/home', (req, res)=>{
  res.render('home.ejs', {rate_float: "", symbol: ""})
})


const baseUrl = "https://api.coindesk.com/v1/bpi"

app.get('/getPrice', (req, res)=>{
  let route = "currentprice.json"
  let endpoint = `${baseUrl}/${route}`
  let dog = req.query.country // USD, GBP or EUR
        
  //  else Throw error - NOTE: still need to do
  $fetch(endpoint) // 1) utilize the endpoint
  .then(response => response.json()) // 2) if ok - parse data
  .then(data => {
    console.log(data.bpi[dog])
    let {rate_float, symbol} = data.bpi[dog]
    res.render('home.ejs', {rate_float, symbol})
  }) // 3) do something with the data
  .catch(error =>{ // 4) handle the error(s)
    console.log(error)
    res.render('error.ejs')
  }) 
})


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Bitcoin listening on port ${port}`))