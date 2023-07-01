require('dotenv').config()
const mongoose = require('Mongoose')
const {DB, URI} = process.env
const endpoint = `mongodb://${URI}/${DB}`


let connectionObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: "acc",
    pass: "acc_rocks-_2020",
};


//connecting to database and send back error if anything happens
mongoose.connect(endpoint, connectionObject)
.then(()=> console.log(`Connected to ${DB} database`))
.catch((error)=>{
    console.log(`Error connecting to ${DB}: `, error)
})
