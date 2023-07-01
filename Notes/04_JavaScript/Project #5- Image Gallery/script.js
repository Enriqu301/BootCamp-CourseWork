var imgBG = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var index = 0;                                                                        

let prevButton = document.querySelector(".button-prev")
let nextButton = document.querySelector(".button-next")


var img = document.querySelector("img")



// prevButton.addEventListener("click", function() {
//     var nextImage = imgBG[index]
//     img.setAttribute('src', nextImage)
//     index++

//     if(index >= imgBG.length){
//         index = 0;
//     }
        

// });

document.querySelector(".button-prev").addEventListener("click", function(){
    moveToPrevSlide();
})

document.querySelector(".button-next").addEventListener("click", function(){
    moveToNextSlide();
})

function moveToPrevSlide () {
    var prevImage = imgBG[index]
    img.setAttribute('src', prevImage)
    index--

    if(index <= imgBG.length){
            index = 5;
        }
}

function moveToNextSlide () {
    var nextImage = imgBG[index]
    img.setAttribute('src', nextImage)
    index++

    if(index >= imgBG.length){
            index = 0;
        }
}

