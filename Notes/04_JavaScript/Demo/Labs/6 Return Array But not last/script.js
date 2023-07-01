/*Make a fucntion called "theLastofUs" that returns all of the elements in the array except for the last one. Try using the slice method to solve this!

FOR EXAMPLE:
var food = ['onion rings', 'fries', 'burgers', 'chili', 'hot dog'];
theLastofUs(food)
*/

function theLastofUs(arr){
    return arr.slice(0, arr.length - 1);
}



document.write(theLastofUs([1,2,3,4]))
document.write(theLastofUs(["hello", 2, "goodday", 4]))
console.log(theLastofUs(['onion rings', 'fries', 'burgers', 'chili', 'hot dog']))

