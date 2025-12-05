// Line drawing

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    background(45, 52, 54);
}

function draw() {
    if (mouseIsPressed) {
        stroke(162, 155, 254);
        strokeWeight(3);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
