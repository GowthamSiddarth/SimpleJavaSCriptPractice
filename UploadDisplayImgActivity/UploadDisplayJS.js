function upload() {
	var fileinput = document.getElementById("finput");	
	var image = new SimpleImage(fileinput);
	
	var canvas = document.getElementById("canvas1");
	image.drawTo(canvas);	
}