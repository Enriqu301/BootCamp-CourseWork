var food = document.getElementById("fruit");

var food2 = document.getElementsByClassName("breakfast");
console.log(food2[0]);

var food3 = document.getElementsByTagName("li");
console.log(food3[0]);

var food4 = document.querySelector("#fruit");
console.log(food4)

var food5 = document.querySelectorAll("h1");

document.getElementById("fruit").style.color="green";
document.getElementById("fruit").style.border = "10px solid orange";
document.getElementById("fruit").style.fontSize = "36px";
document.getElementById("fruit").style.background = "blue";
document.getElementById("fruit").style.marginTop = "150px";

//

//Change the Link using java script from costco  to amazon                                                                                          
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href" , "https://www.amazon.com");

