
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
// Foundation

//Setting view engine
app.set('view engine', 'ejs');
// Link CSS
app.use(express.static('public'));

// Bring in our helper functions
const { dealCards, updateCards, sortHand } = require('./helpers/dealer')


// Endpoint
//https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

let baseURL = `https://deckofcardsapi.com/api/deck/`

//Create middleware
const getDeckId = (req, res, next) => {
   //Amount of decks we want to draw
   let deck_count = 2;
   //Building our endpoint to draw decks
   let endpoint = `${baseURL}new/shuffle/?deck_count=${deck_count}`
   request(endpoint, (error, response, body)=> {
       //If there is not an error and status code is 200
       if(!error && response.statusCode == 200){
         let data = JSON.parse(body);
 
         
         //Add the deck id to the request object
         req.deck_id = data.deck_id
         //Fire the next route
         next()
         //res.render('home')
       } else {
         //If there is an error we will render the error page and send a error message
         res.render('error', { error: "Oops something went wrong getting the deck! Try again!" })
       }
 
   })
}


//Routes
// app.get('/', (req, res, next) => {
//   //Amount of decks we want to draw
//   let deck_count = 2;
//   //Building our endpoint to draw decks
//   let endpoint = `${baseURL}new/shuffle/?deck_count=${deck_count}`
//   request(endpoint, (error, response, body)=> {
//       //If there is not an error and status code is 200
//       if(!error && response.statusCode == 200){
//         let data = JSON.parse(body);

        
//         //Add the deck id to the request object
//         req.deck_id = data.deck_id
//         //Fire the next route
//         next()
//         //res.render('home')
//       } else {
//         //If there is an error we will render the error page and send a error message
//         res.render('error', { error: "Oops something went wrong getting the deck! Try again!" })
//       }

//   })

// })




app.get('/', getDeckId, (req, res) => {
  // Amount of cards to draw
  let draw_count = 6;
  //Endpoint to draw cards
  let endpoint = `${baseURL}${req.deck_id}/draw/?count=${draw_count}`

  request(endpoint, (error, response, body) => {
    
    if(!error && response.statusCode == 200){
       let data = JSON.parse(body);
       //console.log(data)
       let updatedValues = updateCards(data.cards)
       const { player, computer } = dealCards(updatedValues)
      
       res.render('home', {player, computer, sortHand})
    } else {
      console.log(error)
      res.render('error', {error: "Oops something went wrong drawing cards! Try again."})
    }
  })

})


// Listener
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`)})