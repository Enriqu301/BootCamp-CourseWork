const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("../client"))

// this is our body-parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// allows access to fake data file
const { bucketArray } = require("./fakeData");
//NOTE: Very importnat to add to rune the things in the mongoconnetion 

// Make a connection
  // install more stuff? Mongoose, Dotenv
  // .env file -handle confidential credentials
  // connection objects
require("./connections/mongoconnection")


//Require .ItemModel...
//Deconstructing is happening below. Its pulling out the thing we want. 
//The object is Item Model from Bucket Model
const ItemModel = require('./Models/BucketModel').ItemModel
console.log(ItemModel)


//Write queries
  //Create
  //Read
  //Update
  //Delete


app.get("/", (req, res) => {
  res.send("Groot route");
});


// READ with Mongoose
app.get("/bucket", (req, res) => {
  // db.ERMBucket.find()
  //db was in DOTenv
  //ERMBucket was specified in the model above
  ItemModel.find({}, (err,results)=>{
  // do something
  // if error, send back error
  if(err){
    console.log(err)
    res.end(666).json({message: "unable to get data"})
    // else send back result
  }else{
    res.json(results)
  }
  })
});


let newId = 4;
// CREATE
app.post("/bucket", (req, res) => {
  // build an object from user data
  //Mongo wil supply an id
  //mongoose schema supplying false for iscomplete
  let data = {
    // id: newId++,
    description: req.body.description 
    ? req.body.description 
    : "Lucas messed up!!!"
  };


  //Add data to database
  ItemModel.create(data, (err, result)=>{
    if(err){
      res.status(400).json({message:"Cannont add to database"})
    }else {
      // send a receipt back to client
      console.log(result)
      res.json(result);
    }
  })
});


// Delete
app.delete('/bucket/:id', (req, res)=>{
  // access value from parameters
  //req.params. send datat to url
  //Number means it changes it from default a string to a number
  let requestedId = req.params.id;

  //MongoDB Find Method. 
  //knows by default its looking for Object ID

  ItemModel.findByIdAndDelete(requestedId,(err, result)=>{
    if(err){
      //do something
    } else {
      //do something
    }
  });


  // need to find if element exists matching user's id
  // if there is a match, returns the index of the first match
  let requestedItemIndex = bucketArray.findIndex((bucketItem)=>{
    return bucketItem.id === requestedId
  })
  if(requestedItemIndex !== -1){
    // if we know the index, can we splice?
    // we need to know starting index and 1
    bucketArray.splice(requestedItemIndex, 1)
    // send data back
    res.json(bucketArray)
  } else {
    res.status(404).json({error: "Unable to find id on backend with delete"})
  }
});

// UPDATE = PUT
app.put('/bucket/:id', (req, res)=>{
  let requestedId = req.params.id;

  ItemModel.findById(requestedId, (err,result)=>{
    if(err){
      res.status(404).json({error: "Unable to find id for put backend method"});
    } else{
      //returns stuff from database. resaigns itself 
      result.isComplete = !result.isComplete
      //.save is a method. Result is the data

      //result from databse has built in mehtods
      //one of those is .save()
      //save the updated document
      result.save((error, updatedResult)=>{
        if(error){
          res.status(404).json({error: "Unable to update using put backend method"});
        } else {
          res.json(updatedResult)
          console.log(updatedResult)
        }
      })
    }
  })

  // // test to make sure element is found
  // if(item){
  //   // update isComplete from false to true <=> true to false
  //   item.isComplete = !item.isComplete;
  //   res.json(item)
  // } else {
  // }
})

app.listen(port, () => console.log(`App listening on port ${port}`));
