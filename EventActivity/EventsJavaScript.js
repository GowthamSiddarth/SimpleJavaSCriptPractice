function applyColor() {
	var canvas = document.getElementById("canvas1");
	var color = document.getElementById("color1");
	canvas.style.backgroundColor = color.value;
}

function drawSquare() {	
	var slider = document.getElementById("slider1");
	var len = slider.value;
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 10, len, len);
}