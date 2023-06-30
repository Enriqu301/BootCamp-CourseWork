const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Build a connection
const mongoose = require('mongoose')
require('./config')

// Build Blueprints
  // Schemas
const getDate = () =>{
  let date = new Date()
  return date.getFullYear()
}

let charSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      minLength: 4,
      maxLength: 10,
      required: [true, "Karl borked it!!!"]
    },
    animal: String,
    villain: {
      type: Boolean,
      default: false
    },
    age: {
      type: Number,
      min: 21,
      max: 98
    },
    createdOn: {
      type: Date,
      default: getDate()
    }
  }
)
  // Models
let CharModel = new mongoose.model('characters', charSchema)

// Write queries
// let character = new CharModel(
//   {
//     fname: "Sonic",
//     animal: "Hedgehog",
//     villain: false,
//     age: 16
//   }
// )

let character = new CharModel(
  {
    fname: "Tails5",
    animal: "fox",
    age: 24,
    villain: false
  }
)
// db.characters.insert(character)
character.save((err, result)=>{
  if(err){
    console.log("Unable to save data to database: ", err.message)
  } else {
    console.log(result)
  }
  // console.log(`${err? "Unable to save data to database" : result}`)
})

// CharModel.create({
//   fname: "Robotnik",
//   villain: true, 
//   age: 99,
//   animal: "human"
// }, (doggyHorse, result)=>{
//   if(doggyHorse){
//     console.log(`Error saving data to database: `, doggyHorse)
//   } else {
//     console.log(result)
//   }
// })

// db.characters.find()
// CharModel.find({}, (er, result)=>{
//   if(er){
//     console.log( `Issues finding data: `, er)
//   } else {
//     console.log(result)
//   }
// })


app.get('/', (req, res)=>{
  res.send('Sonic app route')
})

app.listen(port, ()=> console.log(`Sonic app listening on port ${port}`))