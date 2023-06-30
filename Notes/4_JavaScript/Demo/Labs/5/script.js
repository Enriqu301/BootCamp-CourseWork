// make a function that takes in 2 arguemnts (both strings).

    //if the first string is greater in length that the second. the fucntion returns "first is longer"

    //if the second string is greater in lenght than the first, the fucntion returns "second is longer."

    // otherwise, the fucntion returns "they are equal length."

//For example:
/* stringCompare("yes", "no"); //firs is longer
   stringCompare("no", "what"); //second is longer 
*/

function stringCompare(string1, string2){
    if (string1.length > string2.length){
        return "first is longer "
    } else if (string1.length < string2.length){
        return "second is longer"
    } else {
        return"they are equal"
    }
}

document.write(stringCompare("yes", "no"));
document.write(stringCompare("yes", "yes"));
document.write(stringCompare("e", "no"));