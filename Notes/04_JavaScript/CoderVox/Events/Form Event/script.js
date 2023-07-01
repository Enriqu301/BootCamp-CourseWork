var theEmail = document.getElementById("email");
var warning = document.getElementById("theMessage");

theEmail.addsEventListener("focus", function(){
    warning.textContent = "Enter a Valid Email";
});

theEmail.addEventListener("blur", function(){
    if (theEmail.value == "") {
        alert("Email cant be empty")
    } else {
        warning.textContent = "";
    }
});