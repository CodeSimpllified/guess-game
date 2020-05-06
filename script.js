"use strict";
//Script code to change color
var colorArray = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "pink", "gray", "brown"];
var changeColor = document.getElementById("change__color");
var container = document.getElementById("container");
var lastBackgroundColor = "cyan";
changeColor.addEventListener('click', randomColor);
function randomColor(event){
	var randomColorIndex = Math.floor(Math.random()*colorArray.length);
	container.style.backgroundColor = colorArray[randomColorIndex]; 
	lastBackgroundColor = colorArray[randomColorIndex]; 
	event.stopPropagation();
}

//script code to change shape
var shape = document.getElementById("shape");
// for square shape
var square = function (){
	shape.style.width = "100px";
	shape.style.height = "100px";
	shape.style.borderRadius = "0%";
	shape.style.border = "0px solid transparent";
	shape.style.backgroundColor = "white";
	shape.style.transform = "skew(0deg)";
}

//for rectangle shape
var rectangle = function (){
	shape.style.width = "150px";
	shape.style.height = "100px";
	shape.style.borderRadius = "0%";
	shape.style.border = "0px solid transparent";
	shape.style.backgroundColor = "white";
	shape.style.transform = "skew(0deg)";
}

//for oval shape
var oval = function (){
	shape.style.width = "150px";
	shape.style.height = "100px";
	shape.style.borderRadius = "50%";
	shape.style.border = "0px solid transparent";
	shape.style.backgroundColor = "white";
	shape.style.transform = "skew(0deg)";
}

//for circle shape
var circle = function (){
	shape.style.width = "100px";
	shape.style.height = "100px";
	shape.style.borderRadius = "50%";
	shape.style.border = "0px solid transparent";
	shape.style.backgroundColor = "white";
	shape.style.transform = "skew(0deg)";
}

//for triangle shape
var triangle = function (){
	shape.style.width = "0px";
	shape.style.height = "0px";
	shape.style.borderRadius = "0%";
	shape.style.borderBottom = "100px solid white";
	shape.style.borderLeft = "50px solid transparent";
	shape.style.borderRight = "50px solid transparent";
	shape.style.backgroundColor = "transparent";
	shape.style.transform = "skew(0deg)";
}

//for Parallelogram shape
var parallelogram = function(){
	shape.style.width = "120px";
	shape.style.height = "100px";
	shape.style.border = "0px solid transparent";
	shape.style.backgroundColor = "white";
	shape.style.transform = "skew(20deg)";
}

var shapeArray = [square, rectangle, oval, circle, triangle, parallelogram];


//TO SELECT RANDOM SHAPE
var changeShape = document.getElementById("change__shape");
var lastShape = square;
changeShape.addEventListener('click', randomShape);
function randomShape(event){
	var randomShapeIndex = Math.floor(Math.random()*shapeArray.length);
	shapeArray[randomShapeIndex]();
	lastShape = shapeArray[randomShapeIndex];
	event.stopPropagation();
};

// for answer button
var answer = document.getElementById("answer");
var showResult = function(){
	alert('Color: '+lastBackgroundColor+' Shape: '+lastShape.name);
};
answer.addEventListener('click', showResult);
