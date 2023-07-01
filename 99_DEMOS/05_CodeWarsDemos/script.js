// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// NOTE: Pseudocode
// create function with one argument which is a string
//      is it a string?
//           no -> return
//      make sure string is lowercase
//           no -> make it lowercase
//      track count with variable
//      variable array of vowels - a,e,i,o,u only!
//      iterate through string
//           vowel matches char in string?
//                yes -> increase count 
//                no -> keep going
//      return count





// Strategies
// 1) How to iterate
//      leave a string or make an array
// 2) Variable to keep track of count
// 3) Conditional to test if character is a vowel
//      Multiple conditionals?
// 4) When testing - char to char or ASCII numerical value

// Questions:
// 1) need a function
//      take an argument
// 2) String data type 
// 3) Return a numerical data type
// 4) Iterate through a string
// 5) string needs to be lowercase
//     what if a string with uppercase is passed?
// 6) might be multiple words
// 7) NO y!!! 