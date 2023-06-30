document.getElementById("userText").addEventListener("keyup", function(){
    var textLength = document.getElementById("userText").value.length;
    var message = document.getElementById("theMessage")
    var counter = (10-( textLength));
    message.textContent = counter + "characters left"

    if (counter <= 3 ){
        message.style.color = "red";
    } else {
        message.style.color = "black";
    }


})