// Pulsing circle

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
}

function draw() {
    background(255);
    
    let size = 100 + sin(frameCount * 0.05) * 50;
    
    fill(108, 92, 231);
    noStroke();
    ellipse(width/2, height/2, size, size);
}
