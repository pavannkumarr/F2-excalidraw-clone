const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let drawingcolor="black"; // initially the drawing color is black
// let drawingwidth="2"

let previousPosition = null;
function onMouseDown(e) {
    previousPosition = [e.clientX, e.clientY];
    c.strokeStyle = drawingcolor;
    c.lineWidth = 3;
    // Add mousemove event and mouse up event
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(e) {
    // For the first time only previousPosition is this below one
    let currentPosition = [e.clientX, e.clientY];
    // canvas.style.cursor = "crosshair"; // to change cursor (by me) //? it is added in freehand.js
    // Draw a line from previous position to current position. 
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    previousPosition = currentPosition;
}
function onMouseUp(e) {
    // ! we need to remove the mousemove event listener
    canvas.removeEventListener("mousemove", onMouseMove);
    // canvas.style.cursor = ''; // to again go back to normal cursor(by me) //? it is added in freehand.js
}