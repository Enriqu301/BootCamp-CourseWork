// $(alert("Hello"))

// have an initial image
//   "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg"

$("img") // select an element
  .attr(
    "src",
    "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg" // set valeu
  );

let baseUrl = "https://dog.ceo/api";
// click the button
$("button").click(() => {
  //    use an http request
  // https://dog.ceo/api/breeds/image/random
  // endpoint = baseUrl + route
  let route = "breeds/image/random";
  let endpoint = `${baseUrl}/${route}`;
  fetch(endpoint) // makes http request to 3rd party endpoint
    .then((response) => response.json()) // parses the json and returns to next .then
    .then((data) => {
      // do something with parsed data
      // console.log(data)
      $("img").attr("src", data.message);
    })
    .catch((err) => {
      // error handler
      console.error("Error with network: ", err);

      $("img").attr("src", "https://http.cat/404");
    });
});

// NOTE: How to get input from user and get specific dog breed images
// $("input").keypress(()=>{
//   let breed = "bulldog"
//   let route = `breed/${breed}/images`
//   let endpoint = `${baseUrl}/${route}`
// })
