// $(document).ready(alert());

// jquery works by
// using CSS selectors
// add a method which is a function that is part of an object
// const styles = {
//   borderTop: "10px ridge darkblue",
//   borderBottom: "20px solid red"
// }
// $("div").css(styles);

// $("p.cat").eq(0).css(styles)

// Same as line 12
// let p = document.querySelectorAll("p.cat")
// p[0].doSomething()

// example setter - setting the text in our DOM
$("p.cat").eq(1).text("George");

// exmaple getter - get text from content from DOM
let cat = $("p.cat").eq(0).text();
console.log(cat);

$("button").on("click", (event) => {
  event.preventDefault();
  // console.log(event)
  let text = $("input").val();
  console.log("Input is: ", text);
});

$("p.cat")
  .eq(0)
  .on("click", function () {
    let kitty = $(this).text();
    // let kitty = $("p.cat").eq(0).val()
    console.log("Kitty is: ", kitty);
  });

$("#color").attr("class", "bird")

$(".bird").css("backgroundColor", "orange")

$("#color").keypress(function (event) {
  if(event.which === 13 && $(this).val().trim()){
    let color = $(this).val().trim().slice(0,5);
    console.log(color);
    $(this).val("")
  }
});
