require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//MAKE A DATABASE WITH MONGOOSE
// Build a connection
const mongoose = require('mongoose');
const {DB, URI} = process.env
const endpoint = `mongodb://${URI}/${DB}`

let connectionObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: "acc",
    pass: "acc_rocks_2020",
};

mongoose.connect(endpoint, connectionObject)
.then(()=> console.log(`Connected to ${DB} database`))
.catch(()=>{
    console.log(`Error connecting to ${DB}:`, error)
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Build Blueprints
    //Schemas
let charSchema = new mongoose.Schema(
    {
        fname: String,
        animal: String,
        villain: Boolean,
        age: Number
    }    
)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Models
let CharModel = new mongoose.model('characters', charSchema)

//was deleted not sure.
// db.collectionName.insert()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write Quieries
let character = new CharModel(
    {
        fname: "Sonic",
        animal: "Hedgehog",
        villain: false,
        age: 16
    }  
)
//below saves sonic to the data base
//db.characters
// character.save((err, result)=>{
//     if(err){
//         console.log("Unable to save data to database")
//     } else {
//         console.log(result)
//     }
// })

//NOTE:Below Creates a new character. Similar to .save above 
// CharModel.create({
//     fname: "Robotnik",
//     villain: true, 
//     age: 99,
//     animal: "human"
// }, (err, result)=>{
//     if(err){
//         console.log(`Error saving data to database:`, error)
//     }else{
//         console.log(result)
//     }
// })

//NOTE: db.characters.find()
CharModel.find({}, (er, result)=>{
    if(er){
        console.log(`Issues finding data: `, er)
    } else {
        console.log(result)
    }
})


app.get('/', (req,res)=>{
    res.send('Sonice APpp Route')
})

app.listen(port, ()=> console.log(`Sonic app listening on port ${port}`))
