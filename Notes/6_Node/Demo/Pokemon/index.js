const pokemon = require("pokemon");//has to take an argument of a string and nothing else 

console.log(pokemon.random());

//we know we want 5 of something so we should use a for loop 
// loop 5 times
// need to store elements - Array can be used
//append to the array - means to push 
//need to show  the 5 pokemons so - console.log the array to show the 5 pokemons 
let pokeArray = []
for(let i = 0; i <= 5; i++){
    //append to the array 
    let char = pokemon.random()
    pokeArray.push(char)
}

console.log(pokeArray);