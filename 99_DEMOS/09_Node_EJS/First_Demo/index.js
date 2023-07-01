const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.render("home.ejs", {doggy: { cat: "meow"}})
})

app.get('/kitty', (req, res)=>{
  res.send("Someone pressed my button!!!")
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`EJS demo app on port ${port}`))