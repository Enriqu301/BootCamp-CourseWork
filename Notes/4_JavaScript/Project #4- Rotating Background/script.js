window.onload = function () {

    function changeImage() {   
        var BackgroundImg=[
            "background1.jpg",
            "background2.jpg",
            "background3.jpg",
        ];
        var i = Math.floor((Math.random() * 3));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
        document.body.style.backgroundImage = "no-repeat";
    }
    window.setInterval(changeImage, 1000);
}