const prompt = require("prompt-sync")();
var unicorn = require("unicorn")
unicorn = unicorn.install()

const note = prompt("Type your ransom nout here");

//How do we randomize cases of characters?
//interate through each character
//split it up into an array 
        console.log(note.split(""))
        note = note.split("").map(function(letter){
            let result = Math.round(Math.random())
            if(result === 0 ){
                letter = letter.toLowerCase()
            } else {
                letter = letter.toUpperCase()
            }
            return letter
        })
        note = note.join("") //.join reconects the letters from the split words.
// use Math.random()
// 0 or 1 - determines uppper or lowercase



console.log(note.unicorn())