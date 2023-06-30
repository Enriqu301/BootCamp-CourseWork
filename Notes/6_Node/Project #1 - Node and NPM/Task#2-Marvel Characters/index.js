var marvel = require('marvel-characters')



/*a. Get a random character to show in the terminal.*/
console.log(marvel())
// b. Display the number of characters in the database
var list = marvel.characters
console.log("Total ammount in Array: "+ list.length)
/*c. Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.*/
    var isMan = marvel()
    if (isMan.startsWith('Man') === true){
        console.log(isMan)
    } else {
        console.log ("Hero Starting in Man does not exist")
    }
/*d. Display “Iron Man” in your terminal, or an error message if does not exist*/
if (isMan === ("Iron Man")){
    console.log(isMan)
} else {
    console.log ("Iron Man does not exist")
}

/*e. Display “Batman” in your terminal, or an error message if does not exist*/








