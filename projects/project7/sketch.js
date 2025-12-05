// Grid of squares

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    noStroke();
}

function draw() {
    background(250, 240, 255);
    
    for (let x = 0; x <= width; x += 50) {
        for (let y = 0; y <= height; y += 50) {
            let d = dist(mouseX, mouseY, x, y);
            let size = map(d, 0, 200, 40, 5);
            fill(108, 92, 231);
            rect(x, y, size, size);
        }
    }
}
