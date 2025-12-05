// Interactive circles that follow the mouse

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    background(255);
}

function draw() {
    fill(108, 92, 231, 50);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}
