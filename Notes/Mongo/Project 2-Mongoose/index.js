const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Make a database with mongoose
    //Build a connection
    const mongoose = require('mongoose')
    require('./config')

//Build Blueprints
    //Schemas

    let charSchema = new mongoose.Schema(
        {
        username : {
            type: String
        },
        age: {
            type: Number
        },
        favorite_pizza : {
            type: String
        }
        }
    )
    //Models
    let CharModel = new mongoose.model('characters', charSchema)

//Write Quieries//
//CREATE a customer named ‘Nancy’ who is 22, and has a favorite pizza of pepperoni.
// let character = new CharModel(
//     {
//     username: "Nancy",
//     age: 22,
//     favorite_pizza: "pepperoni"
//     })

// db.characters.insert(character)
// character.save((err, result)=>{
//     if(err){
//         console.log("Unable to save data to database: ", err.message)
//     } else {
//         console.log(result)
//     }
// })

//CREATE another customer, this time you only know their name is Tommy and they like veggie pizzas.
let character = new CharModel(
    {
    username: "Nancy",
    favorite_pizza: "veggie"
    })

//CONFIRM that it works by querying it in the MongoDB shell. What did you notice, or expect to happen?








app.get('/', (req,res)=>{
    res.send('Project 1 App Route')
})

app.listen(port, ()=> console.log(`Project 1 app listening on port ${port}`))
