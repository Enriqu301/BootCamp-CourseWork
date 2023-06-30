// var checkbox = document.querySelector("checkbox")

// button.addEventListener("change", fucntion(){

//     if(change === true )

// })


//grab 2 elements
var input = document.getElementById("password");
var check = document.getElementById("check");

check.addEventListener('check', function(e){
    console.log(e)

    if(check.checked){
        password.setAtrribute('type', 'password ')
    } else {
        //hide the password 
        password.setAtrribute('type', 'password')
    }
})