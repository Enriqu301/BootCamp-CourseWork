//FOUNDATIONS
var casual = require('casual');



var city = casual.city; // Generate random city name
var Name = casual.name;
var Country = casual.country
var number = casual.phone;
var address = casual.address;
var month = casual.month_name

//Create a simple program that outputs the following statement in the terminal. Use casual to create the (fake data):
console.log("hello there " + Name)
console.log("How was your trip to " + Country )
console.log("Did you get to visit " + city)
console.log("I sure do hope you had a wonderful time.")
console.log("Is your phone number still " + number)
console.log("I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of: " + address)
console.log("Well, I will see you soon. I will be visiting sometime before " + month + ". Until then, farewll!")
