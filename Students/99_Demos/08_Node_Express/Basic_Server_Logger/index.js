// FOUNDATION
const express = require('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))

// ends req-res cycle
// res.end()
// res.json()
// res.render()
// res.redirect() - does not end cycle

app.get('/', (req, res)=>{
  res.redirect('/home')
})

app.get('/home', (req, res)=>{
  res.send('I am the home page')
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Basic Server Logger is listening on port ${port}`))