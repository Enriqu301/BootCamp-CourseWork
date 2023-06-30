const express = require ('express')
const request = require ('request')
const app = express()
const PORT = process.env.PORT || 3000


// Setting vier engine
app.set('view engine', 'ejs')
//Link CSS
app.use(express.static('public'))



//Endpoint, use backticks https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
let baseURL = `https://deckofcardsapi.com/api/deck`




//Routes
app.get('/', (req, res)=>{
    //ammount of dekcs we want to draw
    let deck_count = 2;
    //Bulding our endpoint to draw decks
    let endpoint = `${baseURL}new/shuffle/?deck_count=${deck_count}`

    request(endpoint, (error,response, body)=> {
        //if there is not a n error and status code is 200 
        if(!error && response.statusCodeCode ==200){

        } else {
            res.render('error', {error: "Oops no worky"})
        }

    })

    res.render("home")
})

//Listener
app.listen(PORT, ()=>console.log(`EJS form app on port ${PORT}`))