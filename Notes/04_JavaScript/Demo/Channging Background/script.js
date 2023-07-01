//Grabbin gthe element we want the body 
var body = document.querySelector('body');

//State - for background color 
var isOrange = false

function changeBG(){
    //if it is orange - change to blue 
    if(isOrange === true){
        body.style.background = "blue";
    } else {
        //Change to orange
        body.style.background = "orange";
    }

    //flip back and forth 
    isOrange = !isOrange
}

//set interval 
var id = setInterval(changeBG, 3000)
