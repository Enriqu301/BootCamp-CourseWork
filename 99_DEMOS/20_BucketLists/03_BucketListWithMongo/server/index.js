const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("../client"));

// this is our body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allows access to fake data file
const { bucketArray } = require("./fakeData");

// Make a connection
// install more stuff? Mongoose, Dotenv
// .env file - handle confidentail credential - DONE
// connection objects - DONE
// maybe set up a config folder - DONE
require("./connections/mongoconnection");

const {ItemModel} = require('./models/BucketModel')

// write queries
// Update

app.get("/", (req, res) => {
  res.send("Groot route");
});

// READ
app.get("/bucket", (req, res) => {
  // db.jmbuckets.find()
  // same as above^^
  ItemModel.find({}, (err, results)=>{
    // do something
    // if error, send back error
    if(err){
      console.log(err)
      res.status(400).json({messge: "Unable to retrieve data from server on READ route"})
    // else send back result
    }else {
      res.json(results)
    }
  })
});


// CREATE
app.post("/bucket", (req, res) => {
  // build an object from user data
  // Mongo will supply an id
  // mongoose schema supplying false for isComplete
  let data = {
    description: req.body.description
      ? req.body.description
      : "Lucas messed up!!!"
  };

  // add data to database
  ItemModel.create(data, (err, result)=>{
    if(err){
      res.status(400).json({message: "Cannot add description to database"})
    } else {
      // send a receipt back to client
      console.log(result)
      res.json(result);
    }
  })
});

// Delete
app.delete("/bucket/:id", (req, res) => {
  // access value from parameters
  let requestedId = req.params.id;
  ItemModel.findByIdAndDelete(requestedId, (err, result)=>{
    if(err){
      res.status(404).json({ error: "Unable to find id on backend with delete" });
    } else {
      // do something else
      res.json(result)
    }
  })
});



// UPDATE = PUT
app.put("/bucket/:id", (req, res) => {
  let requestedId = req.params.id;
  // need to find if dument exists in our Db
  ItemModel.findById(requestedId, (err, result)=>{
    // does not exist?
    if(err){
      res.status(404).json({ error: "Unable to find id for put backend method" });
    } else{
      // flip our Booelan from the result from the database
      result.isComplete = !result.isComplete
      // result from database has built in methods
      // one of those is .save()
      // save the updated document
      result.save((error, updatedResult)=>{
        if(error){
          res.status(404).json({ error: "Unable to update using put backend method" });
        } else {
          console.log(updatedResult)
          res.json(updatedResult)
        }
      })
    }
  })
});

app.listen(port, () => console.log(`App listening on port ${port}`));
