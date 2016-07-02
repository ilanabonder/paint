/**
 * Created by itc_user on 6/22/2016.
 */

//creating my beautiful color palette <3
var currentColor = "white";
var divcolors = document.createElement("div");
divcolors.className = "colors";
var spancolors = document.createElement("div");
document.body.appendChild(spancolors);

for (var index=0; index<6; index++){
    var btn = document.createElement("button");
    btn.className = "colors";
    btn.id=index;
    spancolors.appendChild(btn);
    btn.addEventListener("click", pickColor);
}  

document.getElementById(0).id = "red";
document.getElementById(1).id = "orange";
document.getElementById(2).id = "yellow";
document.getElementById(3).id = "green";
document.getElementById(4).id = "blue";
document.getElementById(5).id = "white";

//creating new canvas button
var btn = document.createElement("button");
btn.className = "btnmenu";
btn.textContent = "NEW WHITE CANVAS";
spancolors.appendChild(btn);
btn.addEventListener("click", allPixsWhite);

//new canvas button function
function allPixsWhite(){
   var pixArray= document.getElementsByClassName("pixels");
    for (var i=0; i<pixArray.length; i++)
        pixArray[i].style.backgroundColor = "white";
}

//creating new black canvas button
var btn = document.createElement("button");
btn.className = "btnmenublack";
btn.textContent = "NEW BLACK CANVAS";
spancolors.appendChild(btn);
btn.addEventListener("click", allPixsBlack);

//new canvas button function
function allPixsWhite(){
    var pixArray= document.getElementsByClassName("pixels");
    for (var i=0; i<pixArray.length; i++)
        pixArray[i].style.backgroundColor = "white";
}

//new black canvas button function
function allPixsBlack(){
    var pixArray= document.getElementsByClassName("pixels");
    for (var i=0; i<pixArray.length; i++)
        pixArray[i].style.backgroundColor = "black";
}

//canvas size input and current size number
var canvasSize = 50;

var sizeWrapper = document.createElement("div");
spancolors.appendChild(sizeWrapper);

var sizeInput = document.createElement("input");
sizeInput.type = "range";
sizeInput.min = 5;
sizeInput.max = 200;
sizeInput.value = 50;
sizeWrapper.appendChild(sizeInput);

var textSizeInput =document.createElement("p");
textSizeInput.id= "textSizeInput";
textSizeInput.textContent = sizeInput.value;
sizeWrapper.appendChild(textSizeInput);

sizeInput.addEventListener("change", updateSizeCanvas);



//creating my amazing canvas!
function createCanvas(newCanvasSize) {
    var canvas = document.createElement("div");
    canvas.className = "canvas1";
    document.body.appendChild(canvas);
    var ismousedown = false; //loop that assigns that while the user is mousedow the mouseover function will be activated

    for (var i = 0; i < newCanvasSize; i++) {
        var column = document.createElement("div")
        column.className = "columns";
        canvas.appendChild(column);

        for (var j = 0; j < newCanvasSize; j++) {
            var pix = document.createElement("div");
            pix.className = "pixels";
            pix.addEventListener("mousedown", clickMouseDown);
            pix.addEventListener("mouseover", changeColor);
            pix.addEventListener("mouseup", clickMouseUp);
            column.appendChild(pix);
        }
    }
}

createCanvas(canvasSize);

//canvas size function
function updateSizeCanvas(){
    textSizeInput.textContent = sizeInput.value;
    var canvasChild = document.getElementsByClassName("canvas1")[0];

    console.log(canvasChild);
    canvasChild.parentNode.removeChild(canvasChild);
    createCanvas(sizeInput.value);

}

// user choose color to draw
function pickColor(clickEvent){
    var btn = clickEvent.target;
    currentColor = window.getComputedStyle(btn).backgroundColor;
}


// draw = replace background color of tiny pixel div by color chosen once clicked
function changeColor (clickEvent){
    if (ismousedown === true){
        var currentPixel = clickEvent.target;
        currentPixel.style.backgroundColor = currentColor;
    }
}

function clickMouseDown (clickEvent){
    ismousedown = true;
}

function clickMouseUp (clickEvent){ //once the user unclicks 
    ismousedown = false; 
}

