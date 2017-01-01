function changeColor() {
	var divEle1 = document.getElementById("canvas1");
	var divEle2 = document.getElementById("canvas2");
	divEle1.className = "bluebg";
	divEle2.className = "redbg";
}

function makeBlue() {
	var canvas = document.getElementById("canvas1");	
	canvas.style.backgroundColor = "blue";
	
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 10, 50, 50);
	
	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.fillText("Hello", 45, 90);	
}

function makeOrange() {
	var canvas = document.getElementById("canvas1");
	canvas.style.backgroundColor = "orange";
	
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "black";
	ctx.fillRect(10, 10, 50, 50);
	
	ctx.fillStyle = "blue";
	ctx.font = "20px Arial";
	ctx.fillText("Hello", 45, 90);
}