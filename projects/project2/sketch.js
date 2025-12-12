function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
}

let headMove = false;
let eyeMove = true;

let hatType = 'orange';

let blink = true;
let blinkInterval = 100;
let blinkDuration = 5;
let time = 0;

function draw() {
  time++;
  //console.log(time);
  mirrorBkgd();
  
  //hat
  switch (hatType) {
    case 'lemon':
      lemonHat();
      break;
    case 'strawberry':
      strawberryHat();
      break;
    case 'watermelon':
      watermelonHat();
      break;
    case 'orange':
      orangeHat();
      break;
  }

  face();
  
  text('press \'m\' and move mouse for \"distortion mirror\"', 30, 40);
  text('press \'m\' again to revert to default', 30, 60);
  text('press \'h\' for random hat', 30, 90);
  
  mirrorFrame();
}

function keyPressed() {
  if (key === 'h') {
    //console.log("h key");
    let rand = int(random(0,4));
    switch (rand) {
      case 0:
        hatType = 'lemon'
        break;
      case 1:
        hatType = 'orange'
        break;
      case 2:
        hatType = 'watermelon'
        break;
      case 3: 
        hatType = 'strawberry'
        break;
    }
    //console.log(hatType);
  }
  
  if (key === 'm') {
    headMove = !headMove;
    eyeMove = !eyeMove;
    //console.log(headMove);
  }
}

function face() {
  push();
  angleMode(RADIANS);
  translate(height / 2, width / 2 + 10);
  if (headMove) {
    scale(map(mouseX, 0, 400, 1, 6), map(mouseY, 0, 400, 1, 6));
  }
  
  fill (230, 206, 186);
  ellipse(0, 0, 70, 50);
  
  //eyes
  push();
  fill(38, 14, 5);
  if (eyeMove) {
    translate(map(mouseX, 0, 400, -4, 4), map(mouseY, 0, 400, -4, 2));
  }
  
  if (blink && time >= blinkInterval) {
    blink = false;
    time = 0;
  } else if (!blink && time >= blinkDuration) {
    blink = true;
    time = 0;
  }
  
    if (blink) {
      ellipse(-18, 0, 8, 8);
      ellipse(18, 0, 8, 8);
    } else {
      stroke(0);
      strokeWeight(3);
      line(-20, 0, -16, 0);
      line(16, 0, 20, 0);
    }
    
  pop();
  
  //mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(0, 5, 8, 8, 0, PI);
  pop();
}

function strawberryHat() {  
  push();
    //strawberry
    translate(height / 2, width / 2);
    if (headMove) {
      scale(map(mouseX, 0, 400, 1, 5), map(mouseY, 0, 400, 1, 5));
    }
  
    fill(204, 88, 67);
    noStroke();
    ellipse(0, 0, 100, 120); 

    //leaves
    push();
      stroke(83, 148, 75);
      strokeWeight(7);
      noFill();
      translate(-15, -60);
      rotate(-45);
      arc(0, 0, 50, 30, 0, 65);
    pop();
    
    translate(0, -5);
    angleMode(RADIANS);
    fill(83, 148, 75);
    arc(0, -20, 95, 75, PI, 0, CHORD);      
    triangle(0, -75, -10, -50, 10, -50);

    //red negatives
    translate(- height/2, - width/2);
    fill(204, 88, 67);
    triangle(153, 180, 185, 160, 200, 180);
    triangle(200, 180, 220, 165, 248, 180);

  pop();
 
  
}

function lemonHat() {
  push();
  
    //lemon
    translate(height / 2, width / 2);
    if (headMove) {
      scale(map(mouseX, 0, 400, 1, 5), map(mouseY, 0, 400, 1, 5));
    }

    fill(217, 168, 7);
    noStroke();
    ellipse(0, 0, 125, 100); 

    circle(60, 0, 30);
    circle(-60, 0, 30);

    //leaf
    push();
      translate(100, 0);
      angleMode(DEGREES);

      fill(83, 148, 75);
      rect(-30, -5, 20, 5);

      rotate(45);
      ellipse(0, 10, 40, 20);
    pop();
  
  pop();
}

function orangeHat() {
  push();
    //orange
    translate(height / 2, width / 2);
    if (headMove) {
      scale(map(mouseX, 0, 400, 1, 5), map(mouseY, 0, 400, 1, 5));
    }
  
    fill(230, 152, 50);
    noStroke();
    ellipse(0, 0, 100, 100); 
    ellipse(0, -45, 20, 20); 

    //leaf
    push();
      translate(28, -65);
      angleMode(DEGREES);

      fill(83, 148, 75);
      rect(-30, -5, 5, 20);

      rotate(-30);
      ellipse(-12, -7, 30, 15);
    pop();
  
  pop();
}

function watermelonHat() {
  push();
   //green
    translate(height / 2, width / 2);
    if (headMove) {
      scale(map(mouseX, 0, 400, 1, 5), map(mouseY, 0, 400, 1, 5));
    }
    noStroke();
    
    
    fill(22, 74, 13);
    ellipse(0, 0, 110, 120); 
  
    fill(67, 143, 54);
    ellipse(0, 0, 90, 120); 
  
    fill(22, 74, 13);
    ellipse(0, 0, 70, 120); 
  
    fill(67, 143, 54);
    ellipse(0, 0, 40, 120); 
  
    push();
      stroke(22, 74, 13);
      strokeWeight(7);
      noFill();
      translate(-15, -60);
      rotate(-45);
      arc(0, 0, 50, 30, 0, 65);
    pop();
  
  pop();
}

function mirrorBkgd() {
  //mirror
  background(206, 237, 237);
  noStroke();
}

function mirrorFrame() {
  //highlights
  push();
  fill('rgba(240, 252, 252, 0.2)');
  angleMode(DEGREES);
  rotate(45);
  rect(200, -300, 50, 800);
  rect(300, -300, 20, 800);
  pop();
  
  //frame
  push();
  stroke(150, 112, 54);
  noFill();
  strokeWeight(35);
  rect(0, 0, width, height);
  
  stroke(87, 59, 19);
  noFill();
  strokeWeight(5);
  rect(8, 8, width - 18, height - 18);
  pop();
}