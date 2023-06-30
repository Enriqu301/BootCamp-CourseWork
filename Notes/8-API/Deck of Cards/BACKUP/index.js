const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;


// Setting view engine
app.set('view engine', 'ejs')
//Link CSS
app.use(express.static('public'))



//Endpoint, use backticks https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
let baseURL = `https://deckofcardsapi.com/api/deck`


//Routes
app.get('/', (req, res, next)=>{
    //ammount of dekcs we want to draw
    let deck_count = 2;
    //Bulding our endpoint to draw decks
    let endpoint = `${baseURL}new/shuffle/?deck_count=${deck_count}`

    request(endpoint, (error,response, body)=> {
        //if there is not a n error and status code is 200 
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body);
            console.log(data)
            //adds the deck id to the request object
            req.deck_id = data.deck_id
            //fire the next route
            next()
            // res.render('home')
        } else {
            res.render('error', {error: "Oops no worky"})
        }
    })
})


app.get('/', (req, res) => {
    // Amount of cards to draw
    let draw_count = 6;
    //Endpoint to draw cards
    let endpoint = `${baseURL}${req.deck_id}/draw/?count=${draw_count}`
  ​
    request(endpoint, (error, response, body) => {
      
      if(!error && response.statusCode == 200){
         let data = JSON.parse(body);
         console.log(data)
         res.render('home')
      } else {
        console.log(error)
        res.render('error', {error: "Oops something went wrong drawing cards! Try again."})
      }
    })
  ​
  ​
  })


//Listener
app.listen(PORT, ()=>console.log(`EJS form app on port ${PORT}`))