function changeColors() {
	var divEle1 = document.getElementById("div1");
	var divEle2 = document.getElementById("div2");
	divEle1.className = "bluebg";
	divEle2.className = "graybg";	
}

function changeContent() {
	var divEle1 = document.getElementById("div1");
	var divEle2 = document.getElementById("div2");
	divEle1.innerHTML = "Gowtham";
	divEle2.innerHTML = "Siddarth";
}

function changeButtonVal() {
	var btn = document.getElementById("dynamicBtn");
	btn.value = "Changed"
}