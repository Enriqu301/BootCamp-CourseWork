var namePrompt = prompt("Tell me your name.");
var number1 = prompt("Give me a number.");
var number2 = prompt("Give me another number.");

function niceDay() {
	var sentence = document.write("You are going to have a wonderful day, " + namePrompt + ". ");
	return sentence;
}

function sum() {
	var one = parseInt(number1);
	var two = parseInt(number2);

	var total = document.write("By the way, the sum of your numbers is " + (one + two) + ".");
	return total;
}


niceDay();
sum();