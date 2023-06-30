const kittycat = require("pokemon");

// console.log(pokemon.random());

// create a deck of 5 pokemon and show the user
// need to store - an array?
let pokeArray = [];
// loop 5 times
for (let i = 0; i < 5; i++) {
  // append to the array - push
  let char = kittycat.random();
  pokeArray.push(char);
}
// display the array
console.log(pokeArray);
