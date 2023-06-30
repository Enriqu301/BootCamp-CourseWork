const assert = require('assert') 

// function to test for first character of a string being upper case
function upperCase(str) {
  regexp = /your regex code/
  return regexp.test(str) ? true : false
}

assert.ok(upperCase('Abcd'))
assert.equal(upperCase('vbcd'), false)

console.log('All tests passed')
