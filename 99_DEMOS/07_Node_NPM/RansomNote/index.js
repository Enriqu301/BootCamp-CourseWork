const prompt = require("prompt-sync")();
var unicorn = require("unicorn")
unicorn = unicorn.install()


let note = prompt("Type your ransom note here (minus the fingers and toes): ");

// how do we randomize cases of characters
// iterate through each character
// split it up into an array

note = note.split("").map(letter => {
  return Math.round(Math.random()) === 0 
            ? letter.toLowerCase() 
            : letter.toUpperCase()
})

// use Math.random()
// 0 or 1 - determines upper or lower
console.log(note.join("").unicorn())
