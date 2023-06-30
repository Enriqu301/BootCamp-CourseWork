const imageArray = ["background1.jpg","background2.jpg","background3.jpg",];

const index = 1;

// function rotateImage(){
//     const imageUrl = "url('" + imageArray[index] + "')";
//     document.querySelector("body").style.backgroundImage = imageUrl;
//     index++;
//     if(index >= imageArray.length){
//         index = 0
//     }
// }

let rotateImage = () => {
    let imageUrl = "url('" + imageArray[index] + "')";
    document.querySelector("body").style.backgroundImage = imageUrl;
    index++
    if(index >= imageArray.length){
        index = 0
    }
}

setInterval(rotateImage, 3000)