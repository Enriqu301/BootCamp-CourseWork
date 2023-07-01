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
    otherWay(displayNum);
    num.innerHTML = displayNum
}

const increment = () => {
    displayNum ++;
    otherWay(displayNum);
    num.innerHTML = displayNum
}


const otherWay = (num) => {
    let error = "";
    if(num < 0 || num > 20){
        error = "Sorry Go the other way.";
    } else {
        error = "";
    } 


    errorMessage.style.color = "red";
    errorMessage.innerHTML = error;
    if(num < 0){
        displayNum = 0;
    } else if (num > 20){
        displayNum = 20;
    }else {
        displayNum = num;
    }
    return error;
}


