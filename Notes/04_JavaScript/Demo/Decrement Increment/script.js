// var count = 0; 

// var incrementEl = document.querySelector("Increment")
// var decrementEl = document.querySelector("Decrement")
// var countEl = document.querySelector("count")

// function setCounterText() {
//     countEl.textContent = count;
// }


// incrementEl.addEventListener("click", function(){
//     count++;
//     setCounterText();
// })


let displayNum = 10;
const num = document.getElementById("numDisplay");
num.innerHTML = displayNum

const decrement = () => {
    displayNum --;
    num.innerHTML = displayNum
}

const increment = () => {
    displayNum ++;
    num.innerHTML = displayNum
}
