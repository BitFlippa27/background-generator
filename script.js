var _ = require("lodash");

var array = [1,2,3,4,5];
console.log("Answer", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colors = [color1, color2];
var body = document.getElementById("gradient");
var initialInputColors = document.querySelector("body");
var button = document.querySelector("button");


function setGradient(random, randCol1, randCol2){
	if (random) {
		body.style.background = "linear-gradient(to right, " 
		+ randCol1
		+ ","
		+ randCol2
		+ ")";
	}
	else {
		body.style.background = "linear-gradient(to right, " 
		+ initialColor1
		+ ","
		+ initialColor1
		+ ")";
	}
	

	css.innerHTML = body.style.background + ";";
	//textContent, createTextNode
}

function addListeners(){
	window.addEventListener("load", initialPageLoad);

	for(let i = 0; i < colors.length; i++){
		colors[i].addEventListener("input", setGradient);
	}

	button.addEventListener("click", generateRandomColor);

}

function initialPageLoad(){
	color1.value = "#ff0000";
	color2.value = "#ffff00";

	let initialColor1 = color1.value;
	let initialColor2 = color2.value;

	body.style.background = "linear-gradient(to right, "
	+ initialColor1 
	+ "," 
	+ initialColor2 
	+ ")";

	css.innerHTML = body.style.background + ";";
}

function generateRandomColor(){
	let hexas = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	let result1 = "#";
	let result2 = "#";
	let randomHex1;
	let randomHex2;
	let random;

	
	for(let i = 0; i < 6; i++){
		randomHex1 = hexas[Math.floor(Math.random() * 15)];
		result1 = result1 + randomHex1;
		color1.value = result1;


		randomHex2 = hexas[Math.floor(Math.random() * 15)];
		color2.value = result2;
		result2 = result2 + randomHex2;
	}

	random = 1;
	setGradient(random, result1, result2);

	
}


addListeners();

