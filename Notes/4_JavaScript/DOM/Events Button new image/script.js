//Array of Images
var images = ["cheesesoup.jpg", "chickensoup.jpg", "macaroni.jpg"];
var index = 0

var button = document.querySelector("button")

var img = document.querySelector('img')

button.addEventListener("click", function(){
    var nextImage = images[index]
    //Set the new image
    img.setAttribute('src', nextImage)
    //incrament
    index++

    if(index >= images.length){
        index = 0;
    }
})