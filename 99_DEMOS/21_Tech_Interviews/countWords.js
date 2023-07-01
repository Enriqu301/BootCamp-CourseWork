const assert = require('assert');
let str = '  The quick brown fox jumps over  ';

function countWords(str) {
    let numberOfWords;
    str = str.replace(/your regex code/, "")
    numberOfWords = str.split(" ").length
    return numberOfWords;
 }

console.log( countWords(str) );

try {
    assert.equal(countWords(str), 6)
} catch {
    console.log('Test failed')
}
