var time = document.getElementById('time');

var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B',
				  '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',
				  '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',
				  '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
var index = 0;

function rotateColor(){
    var color = colorArray[index];
    document.body.style.background = color;
    index++;
    if (index >= colorArray.length) {
        index = 0;
    }
}

function getTime() {
	var currentTime = new Date();

	//We have to convert the time to strings, otherwise we can't add the 0.
	var hours = (currentTime.getHours() % 12).toString();
	var minutes = currentTime.getMinutes().toString();
	var seconds = currentTime.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	//We need this when it's 12 or 24, other it will display 00 for the hour.
	if (hours === '00') {
		hours = '12';
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	var fullTime = hours + ' : ' + minutes + ' : ' + seconds;
	time.textContent = fullTime;
	rotateColor()
}

getTime();
setInterval(getTime, 1000);