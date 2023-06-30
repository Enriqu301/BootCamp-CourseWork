// "Using JavaScript, write a program that console log the numbers from 5 to 100.
// But for multiples of 7 print "Doggy" instead of the number and for the multiples of 5 print "Horse". 
// For numbers which are multiples of both 5 and 7 log "Doggy Horse".  You have 25 min

// Wrap this program into a function that you can call from a console.log (function should return the value)

for(let i = 5; i <= 100; i++){
    console.log(i);
    if (i % 7 === 0){
        console.log("Doggy");
    }
}
