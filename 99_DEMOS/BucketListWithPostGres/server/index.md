MADE BECUASE WAS NOT WORKING SO I USED THE ONE FROM CLASS REPO

//SETUP - dependancies and other requirements
const express = require("express");

//Pull environemnt variables for use hereaa
require('dotenv').config()
//  library (aka depency) that allows u sot connects with and use the PG database
const { Client } = require("pg");
//  creating an express generated object(aka app)
const app = express();
const port = process.env.PORT || 3000;
const logger = require("morgan");
app.use(logger("dev"));


//tells our running server which folder to expose to the world
app.use(express.static("../client"));


// this is our body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CONNECT - to a PG(Post Gress) database
//  { connection info }
const{ PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW } = process.env;
//  { connection object }
const connectionObject = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB,
  user: PG_USER,
  password: PG_PW
}

//  { connect handle }
// simialr to mongo file.
// like defining app.use = express();
const connection = new Client(connectionObject)

//  {connect }
//.connect() is a function. its calling to be executed
connection.connect()
          .then(function(){
            console.log('PostGres database connected');
          })
          //if something is wrong the catch will run
          .catch(function(err){
            console.log('Error connecting to the PostGres database.', err)
          });





//Write queries
//Update
app.get("/", (req, res) => {
  res.send("Bucketlist app server running here");
});



//READ the bucket list items
app.get("/bucket", (req, res) => {
  let query =`SELECT 
              id,
              id, description,
              iscomplete AS "isComplete"
              FROM bucketlist.bucketlist
              WHERE user_id = 71`;
  connection.query(myquery)   //returns a promise
  .then( //sends a function returned to the client to view as a json view
    
    listItems => {
      console.log('listItems are ', listItems.rows)
      res.json(listItems.rows)
    }
  )
  .catch(
    err => {
      console.log('query error:', err)
      res.status(400).json({code:400, message: "query failed,inform support team"})
    }
  )

});

// CREATE
app.get("/bucket", (req, res) => {
  //build 
  let query = `
    INSERT INTO bucketlist.bucketlist (description, iscomplete, user_id)
    VALUES ('${req.body.description}', false, ${user_id})
    RETURNING *, id as "_id"
  `
    //execute the query
    connection.query(myquery)
    .then(data => {
      console.log('data returned is', data.rows[0])
      res.json(data.rows[0])
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({code:400, message: "Did not insert record in the DB"})

    })


// Delete
app.delete('/bucket/:id', (req, res)=>{
  // access value from parameters
  let requestedId = req.params.id;

  let myquery = `
    DELETE FROM bucketlist.bucketlist
    WHERE id = ${requestedId}
      AND user_id = ${user_id}
  `
  //execute the query
  connection.query(myquery)
  .then(data => {
    console.log('data returned is', data.rows[0])
    res.json({})
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({code:400, message: "Did not find request record in the db"})
  })
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
