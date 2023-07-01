// function imageChecked() {
//     if(document.getElementById("myCheck").checked === true){
//         document.getElementById("imageid").style.property = display-none;
//     } else
//         document.getElementById("imageid").src="cheesesoup.jpg";
// }

// imageChecked();



// NOTE: SOLUTION
// document.querySelector("#hide").addEventListener("change", function(){
//     if(document.querySelector("#hide").checked == true){
//         document.querySelector("#soup").style.display = "none";
//     } else {
//         document.querySelector("#soup").style.display = "initial";
//     }
// });

const hide = document.querySelector("#hide");
const image = document.querySelector("#soup");

hide.addEventListener("change", () => {
    image.style.display = hide.checked ? "none" : "initial";
})