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

function rainbow() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		var x = pixel.getX();
		var y = pixel.getY();
		var width = image.getWidth();
		var height = image.getHeight();
		var factor = width / 7;
		
		if (y < factor) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= factor && y < 2 * factor) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0.8 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(1.2 * avg - 51);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= 2 * factor && y < 3 * factor) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= 3 * factor && y < 4 * factor) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		}else if (y >= 4 * factor && y < 5 * factor) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		}else if (y >= 5 * factor && y < 6 * factor) {
			if (avg < 128) {
				pixel.setRed(0.8 * avg);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(1.2 * avg - 51);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		}else if (y >= 6 * factor && y < 7 * factor) {
			if (avg < 128) {
				pixel.setRed(1.6 * avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6 * avg);
			} else {
				pixel.setRed(0.4 * avg + 153);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(0.4 * avg + 153);
			}
		}
	}
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);
}

function blurImage() {
	if (null == image || !image.complete()) {
		alert("No Image");
		return;
	}
	
	var output = new SimpleImage(image.getWidth(), image.getHeight());
	for (var pixel of image.values()) {
		var r = Math.random();
		if (r < 0.5) {
			var x = pixel.getX();
			var y = pixel.getY();
			output.setPixel(x, y, pixel);
		} else {
			var x = Math.floor(r * 10);
			var y = Math.ceil(r * 10);
			output.setPixel(pixel.getX(), pixel.getY(), image.getPixel(x, y));
		}
	}
	
	var canvas = document.getElementById("canvas1");
	output.drawTo(canvas);
}