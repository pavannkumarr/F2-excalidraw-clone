const pencil = document.getElementById("pencil");

const colorpicker = document.getElementById("colorpick");
colorpicker.addEventListener("change", () => {
    drawingcolor = colorpicker.value; // triggers when the value of the color picker changes (e.g., when a user selects a new color).
});

// myown hehehe
// const widthpick = document.getElementById("Lwidth");
// widthpick.addEventListener("change", () => {
//     drawingwidth = widthpick.value; // triggers when the value of the width
//     console.log(drawingwidth);
// });

let isPencilActive = false; // initially the pencil is inactive (operation)

function onPencilClick() {
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive; // to make true so that below condition => //!(DRAWING) can be enabled
    if (isPencilActive) {
        canvas.style.cursor = "crosshair"; // to set cursor as crosshair
        canvas.addEventListener("mousedown", onMouseDown);
    }
    else {
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.style.cursor = ''; // to set cursor as default cursor
    }
}

pencil.addEventListener("click", onPencilClick);

pencil.classList.remove("active"); // Initially remove the 'active' class from the class
// so that .active should toggled further.
