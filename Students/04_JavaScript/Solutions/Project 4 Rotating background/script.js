var imageArray = ['img/background1.jpg', 'img/background2.jpg', 'img/background3.jpg'];
var index = 0;

function rotateImage(){
    var imageUrl = "url('" + imageArray[index] + "')";
    document.querySelector("body").style.backgroundImage = imageUrl;
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
}

setInterval(rotateImage, 3000);