var image = null;

function upload() {	
	var fileinput = document.getElementById("finput");
	image = new SimpleImage(fileinput);	
	
	var canvas = document.getElementById("canvas1");	
	image.drawTo(canvas);	
} 

function setDim() {
	document.getElementById("dim").innerHTML = image.getWidth() + "X" + image.getHeight();
}

function gray() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);
}

function red() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + green + blue) / 3;
		
		if (avg < 128) {
			red = 2 * avg;
			blue = 0;
			green = 0;
		} else {
			red = 255;
			green = 2 * avg - 255;
			blue = 2 * avg - 255;
		}
		
		pixel.setRed(red);
		pixel.setGreen(green);
		pixel.setBlue(blue);		
	}
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);
}

function green() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	for (var pixel of image.values()) {		
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + green + blue) / 3;				
				
		if (avg < 128) {
			green = 2 * avg;
			red = 0;
			green = 0;
		} else {
			green = 255;
			red = 2 * avg - 255;
			blue = 2 * avg - 255;
		}
		
		pixel.setRed(red);
		pixel.setGreen(green);
		pixel.setBlue(blue);
	}
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);
}

function blue() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + green + blue) / 3;
		
		if (avg < 128) {
			blue = 2 * avg;
			red = 0;
			green = 0;
		} else {
			blue = 255;
			red = 2 * avg - 255;
			blue = 2 * avg - 255;
		}
		
		pixel.setRed(red);
		pixel.setGreen(green);
		pixel.setBlue(blue);
	}
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);
}