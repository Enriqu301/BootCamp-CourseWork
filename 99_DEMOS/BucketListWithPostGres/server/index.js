//  SETUP - dependancies and other requirements
const express = require("express");

// Pull environment variables for use here
require('dotenv').config();

//      library (aka dependancy) that allows us to connect with and use
//      the PG database
const { Client } = require("pg");

//      creating an express generated object (aka app)
const app = express();
const port = process.env.PORT || 3000;
const logger = require("morgan");
app.use(logger("dev"));

// tells our running server which folder to expose to the world
app.use(express.static("../client"));

// this is our body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONNECT - to a PG database
//    { connection info }
const { PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW } = process.env;
//    { connection object }
const connectionObject = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB,
  user: PG_USER,
  password: PG_PW
}
//    { connect handle }
const connection = new Client(connectionObject)

//    { connect }
connection.connect()         // returns a Promise
          .then(function(){
            console.log('pg database connected');            
          })
          .catch(function(err){
            console.log('Error connecting to pg db, err is ... ', err)
          });

// write queries
// Update

app.get("/", (req, res) => {
  res.send("Bucketlist app server running here");
});

let user_id = 23;

// READ the bucket list items
app.get("/bucket", (req, res) => {
  let myquery = `SELECT 
    id, 
    id AS "_id",
    description,
    iscomplete AS "isComplete"
  FROM bucketlist.bucketlist
  WHERE user_id = ${user_id}
`;

  // run the query to get the data
  connection.query(myquery)    // returns a promise
    .then(
      listItems => { 
        console.log('listItems are ... ', listItems.rows)
        res.json(listItems.rows) 
      }
    )
    .catch(
      err => {
        console.log('query error:', err)
        res.status(400).json({code: 400, message: "READ query failed, inform the dev team"})
      }
    )
});

// CREATE
app.post("/bucket", (req, res) => {
  // build the sql query text
  let myquery = `
    INSERT INTO bucketlist.bucketlist (description, iscomplete, user_id)
    VALUES ('${req.body.description}', false, ${user_id})
    RETURNING *, id as "_id"
  `
  // execute the query
  connection.query(myquery)
  .then(data => {
    console.log('data returned is ... ', data.rows[0])
    res.json(data.rows[0])
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({code: 400, message: 'Did not insert record in the db'})
  })
});

// Delete
app.delete("/bucket/:id", (req, res) => {
  // access value from parameters
  let requestedId = req.params.id;

  let myquery = `
    DELETE FROM bucketlist.bucketlist
    WHERE id = ${requestedId}
      AND user_id = ${user_id} 
      RETURNING *
  `
  // execute the query
  connection.query(myquery)
    .then(data => {
      console.log('DELETED data returned is ... ', data.rows[0])
      res.json(data.rows[0])
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ code: 404, message: 'Did not find requested record in the db' })
    })
});


// UPDATE = PUT
app.put("/bucket/:id", (req, res) => {
  // id of the item we are updating
  let requestedId = req.params.id;
  // form the SQL query
  let myquery = `
    UPDATE bucketlist.bucketlist
      SET iscomplete = NOT iscomplete
    WHERE id = ${requestedId}
      AND user_id = ${user_id}
       RETURNING *
  `;
  // execute the query
  connection.query(myquery)
  // success
  .then(
    returnObj => {
      res.status(200).json(returnObj.rows[0])
    }
  )
  // failure, here we are using 404 (not found) as a generic http error code
  .catch(
    err => {
      res.status(404).json({code: 10404, message: 'Error updating item'})
    }
  );
});

app.listen(port, () => console.log(`App listening on port ${port}`));
