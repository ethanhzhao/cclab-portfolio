// Color-changing background on click

let bgColor;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    bgColor = color(108, 92, 231);
}

function draw() {
    background(bgColor);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text('Click anywhere!', width/2, height/2);
}

function mousePressed() {
    bgColor = color(random(255), random(255), random(255));
}
