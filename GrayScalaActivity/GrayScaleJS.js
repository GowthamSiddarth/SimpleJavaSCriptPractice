var image;
var grayimg;

function upload() {
	var fileinput = document.getElementById("finput");
	image = new SimpleImage(fileinput);
	grayimg = image;
	
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width = image.getWidth();
	ctx.canvas.height = image.getHeight();
	
	image.drawTo(canvas);
}

function convert() {
	for (pixel of grayimg.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	
	var canvas = document.getElementById("canvas2");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width = grayimg.getWidth();
	ctx.canvas.height = grayimg.getHeight();
	
	grayimg.drawTo(canvas);
}