var number1 = prompt("Give a number.");
var number2 = prompt("Give a another number.");
var number3 = prompt("Give a number again.");

var numberArray = [parseInt(number1), parseInt(number2), parseInt(number3)];
var total = 0

	for (var i = 0; i < numberArray.length; i++) {
		total += numberArray[i];
	}
	document.write("The sum of all of your numbers is " + total + ".");
