var uniqueRandomArray = require('unique-random-array');
var dogBreed = require('./dogs.json');

var getRandomItem = uniqueRandomArray(dogBreed);

module.exports = {
    all: dogBreed,
    random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
} 