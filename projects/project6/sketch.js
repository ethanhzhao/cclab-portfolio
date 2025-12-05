// Mouse distance affects circle size

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
}

function draw() {
    background(255);
    
    let d = dist(mouseX, mouseY, width/2, height/2);
    let size = map(d, 0, 400, 300, 20);
    
    fill(108, 92, 231);
    noStroke();
    ellipse(width/2, height/2, size, size);
}
