var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

var index = 0;
var imageLength = images.length - 1;

function switchImage(x) {
	index += x;

	if (index > imageLength) {
		index = 0;
	}
	if (index < 0) {
		index = imageLength;
	}

	document.getElementById("gallery").src = images[index];
}