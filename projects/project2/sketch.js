// Bouncing ball

let x = 400, y = 300;
let speedX = 5, speedY = 3;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
}

function draw() {
    background(45, 52, 54);
    
    x += speedX;
    y += speedY;
    
    if (x > width - 25 || x < 25) speedX *= -1;
    if (y > height - 25 || y < 25) speedY *= -1;
    
    fill(162, 155, 254);
    noStroke();
    ellipse(x, y, 50, 50);
}
