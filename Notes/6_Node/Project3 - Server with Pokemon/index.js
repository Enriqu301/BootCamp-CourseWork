const pokemon = require('pokemon');
const express = require ('express')
const app = express()


// "/" and send back a response with a string: "I am the Pokemon root route."
    app.get('/', (request, response)=>{
        response.send("I am the Pokemon root route")
    })



//"/pokemon" and send back a response of a random pokemon. 
//Doublecheck this is working by resending the request (refreshing the browser/Postman) mutiple times
    const randPoke = pokemon.random();
    app.get('/pokemon', (request, response)=>{
        response.send("Your Random Pokemon: " + randPoke)
    })



//'/dex' and send back a response that is an array of 5 pokemon - representing our Pokedex
    const randPoke1 = pokemon.random()
    const randPoke2 = pokemon.random()
    const randPoke3 = pokemon.random()
    const randPoke4 = pokemon.random()
    const randPoke5 = pokemon.random()

    const pokeArr = [randPoke1, randPoke2, randPoke3, randPoke4, randPoke5]

    app.get('/dex', (request, response)=>{
        response.send(pokeArr)
    })



// 'pokemon/dex' and send back a response that is an array of 5 Pokemon BUT each element is an object that includes:
    const ranNum = Math.floor(Math.random() * 101);
    const ranNum2 = Math.floor(Math.random() * 101);

    const firPoke1 = {Pokemon: randPoke1, attack: ranNum, defense: ranNum2};
    const firPoke2 = {Pokemon: randPoke2, attack: ranNum, defense: ranNum2};
    const firPoke3 = {Pokemon: randPoke3, attack: ranNum, defense: ranNum2};
    const firPoke4 = {Pokemon: randPoke4, attack: ranNum, defense: ranNum2};
    const firPoke5 = {Pokemon: randPoke5, attack: ranNum, defense: ranNum2};



    app.get('/pokemon/dex', (request, response)=>{
        response.write(firPoke1);
        response.write(firPoke2);
        response.write(firPoke3);
        response.write(firPoke4);
        response.write(firPoke5);
        response.end()
    })



// '/battle' will send back a "winner" and a 'loser" between two Pokemon.
app.get('/battle', (req,res)=>{
    response.send("")
})



//LISTENER
    app.listen(3000,()=>console.log(`App Listening on port 3000`))