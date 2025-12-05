// Growing circles on mouse press

let circles = [];

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
}

function draw() {
    background(250, 240, 255);
    
    for (let c of circles) {
        c.size += 0.5;
        fill(c.col);
        noStroke();
        ellipse(c.x, c.y, c.size);
    }
}

function mousePressed() {
    circles.push({
        x: mouseX,
        y: mouseY,
        size: 10,
        col: color(108, 92, 231, 100)
    });
}
