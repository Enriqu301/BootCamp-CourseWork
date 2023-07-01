// // $(
// //     alert("hello")
// // )

// //jquery works by using css Selectors adds a method which is a function that is part of an object
//     // $("div").css("border", "10px darkblue");

// const styles = {
//     borderTop: "10px ridge darkblue",
//     borderBottom: "20px solid red"
// }

// // $("div").css(styles);

// // $("p").eq(2).css(styles);

// // let p = document.getelementsbyTagName("p")

// //p[2].doSoemething()
// //.eq will target the index you want 



// //NOTEHOW TO TARGET CLASS
// $("p.cat").eq(0).css(styles);
// //let p = document.querySelctorAll("p.cat")


//NOTEChange the second p tag with a class of cat to geroge 
//thi sis an example of setter - setting tht text in the DOM
$("p.cat").eq(1).text("geroge")

//example of a getter.
let cat = $("p.cat").eq(0).text()
console.log(cat)



//NOTE FOR DEMO BELOW
//Grab the Input Tag
//val is a getter or a setter


//.on will take 2 arguements
// $("button").on("click", (event)=> {
//     event.preventDefault()
//     console.log(cat);
//     let text = $("input").val()
//     console.log("input is ", text)
// });


//NOTE How to save info inputed by useer
// $("p.cat").eq(0).on("click", ()=>{
//     let kitty = $(p.cat)eq(0).text()
//     console.log("kitty is: ", kitty)
// });

$("p.cat").eq(0).on("click", function(){
    let kitty = $(this).text()
    console.log("kitty is: ", kitty)

});

$("#color").keypress(function(){
    let color = $(this).val()
    console.log(color)
});