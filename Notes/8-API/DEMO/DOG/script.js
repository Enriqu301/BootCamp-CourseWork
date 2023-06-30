
//have an initial image
//"https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg"

    //select an element and set the image
$("img").attr("src","https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg")

let baseURL = "https://dog.ceo/api"
//click the button
$("button").click(()=>{
    //use an http request
    // endpoint = baseURL + route
    let route = "breeds/image/random"
    let endpoint = `${baseURL}/${route}`
//fetch == Grabs the endpoint
    fetch(endpoint)
    .then((response)=> response.json())
    .then((data)=> {
        $("img")
        .attr("src", data.message)
    })
    .catch((error)=>{
        console.log("Error: ", error)
        $("h1").append(
            `<p>Issues connecting</p>`
        )

    })
        //get random image
        //if no issues
            //set new image in the dom 
    //else
        //handle error
})

// $("button").click(()=>{
//     let breed = "bulldog"
//     let route =  `breed/${breed}/images`
//     let endpoint = `${base}`
// })
