var fgImg;
var bgImg;

function uploadForeground() {
	var fileinput = document.getElementById("finput1");
	fgImg = new SimpleImage(fileinput);
	
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");
	fgImg.drawTo(canvas);
}

function uploadBackground() {
	var fileinput = document.getElementById("finput2");
	bgImg = new SimpleImage(fileinput);
	
	var canvas = document.getElementById("canvas2");
	var ctx = canvas.getContext("2d");
	bgImg.drawTo(canvas);
}

function combine() {
	if (null == fgImg || !fgImg.complete()) {
		alert("Foreground Image is incomplete");
		return;
	}
	if (null == bgImg || !bgImg.complete()) {
		alert("Background Image is incomplete");
		return;
	}
	
	var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
	for (var pixel of fgImg.values()) {
		if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
			var x = pixel.getX();
			var y = pixel.getY();
			
			var bgPixel = bgImg.getPixel(x, y);
			output.setPixel(x, y, bgPixel);			
		} else {
			output.setPixel(pixel.getX(), pixel.getY(), pixel);
		}
	}
	
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");
	output.drawTo(canvas);	
	
	clearCanvas(document.getElementById("canvas2"));
}

function clearCanvas(canvas) {
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearAllCanvas() {
	clearCanvas(document.getElementById("canvas1"));
	clearCanvas(document.getElementById("canvas2"));
}