var email = document.getElementById("emailField");
var password = document.getElementById("passwordField");

function checkFields() {
	if (email.value == "" || password.value == "") {
		alert("Please check the fields and make sure they are not blank.");
	}
}
