//Foundations
var Log = require('log.pets');
var animals = require('animals');

//1. Get a random animal's name to appear in the console using the “animals” package.
const animal = animals();
console.log(animal)

//2. Get a lion ascii art to appear using the “Log.pets” package.
Log.lion()

//3. animal names from the “animals” package appear on the zoo sign from the Log.zoo method in the “Log.pets” package.
const first = animals()
const second = animals()
const third = animals()
Log.zoo(first,second,third)

//4. Can you display the number of animals available for the generator?
var all = animals.words;
console.log("Total ammount in Array: "+ all.length)


//5. Using array methods, how many animals start with the letter 'G', or display an error message if none found?**

//6. Using array methods, and the "G" from above, how can you display number of animals starting with that letter, or display an error message if none found?