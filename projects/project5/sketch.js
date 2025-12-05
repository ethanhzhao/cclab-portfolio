// Rotating square

let angle = 0;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    rectMode(CENTER);
}

function draw() {
    background(45, 52, 54);
    
    translate(width/2, height/2);
    rotate(angle);
    
    fill(162, 155, 254);
    noStroke();
    rect(0, 0, 150, 150);
    
    angle += 0.02;
}
