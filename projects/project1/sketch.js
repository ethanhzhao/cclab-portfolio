let trainX = -30;
let dir = 'right';
let t = 0;

function setup() {
  let canvas = createCanvas(900, 700);
  canvas.parent('sketch-container');
}

function draw() {
  t++;
  rectMode(CENTER);
  //console.log(mouseX, mouseY);
  
  //night background
  background(41, 38, 79);
  
  //train tracks
  stroke(128, 105, 87);
  strokeWeight(5);
  
  push();
  translate(35, 480);
  line(-5, 25, 165, 150);
  line(-10, 60, 100, 150);
  
    push();
    translate(-35, -30);
    line(80, 65, 30, 75);
    pop();
  
    push();
    translate(-5, 0);
    line(80, 65, 0, 80);
    pop();
  
    push();
    translate(30, 30);
    line(80, 65, 0, 80);
    pop();
  
    push();
    translate(65, 60);
    line(80, 65, 0, 80);
    pop();
  
  pop();
  
  push();
  translate(width - 35, 480);
  scale(-1, 1);
  line(-5, 25, 165, 150);
  line(-10, 60, 100, 150);
  
    push();
    translate(-35, -30);
    line(80, 65, 30, 75);
    pop();
  
    push();
    translate(-5, 0);
    line(80, 65, 0, 80);
    pop();
  
    push();
    translate(30, 30);
    line(80, 65, 0, 80);
    pop();
  
    push();
    translate(65, 60);
    line(80, 65, 0, 80);
    pop();
  
  pop();
  
  
  
  //lights
  stroke(120, 96, 50);
  strokeWeight(5);
  line(350, 120, 350, 80);
  line(450, 100, 450, 60);
  line(550, 120, 550, 75)
  
    push();
    noStroke();

    //outer 
     fill('rgba(201, 160, 83, 0.25)');
    if (t % 100 > 20 && t % 100 < 60){
      circle(350, 125, 55); 
    } else if (t % 100 > 40 && t % 100 < 80) {
      circle(550, 135, 55);
    } else if (t % 100 > 60 && t % 100 < 100) {
      circle(450, 100, 55);
    } 

    //inner
    fill('rgba(201, 160, 83, 0.5)');
  
    if (t % 100 > 0 && t % 100 < 40){
      circle(350, 125, 45);
    } else if (t % 100 > 30 && t % 100 < 70) {
      circle(550, 135, 45);
    } else if (t % 100 > 60 && t % 100 < 100) {
      circle(450, 100, 45);
    }

    //always on
    fill(214, 139, 0);
    circle(350, 125, 35);
    circle(450, 100, 35);
    circle(550, 135, 35);
    pop();
  
//empire state building
  fill(182, 182, 204);
  stroke(89, 70, 48);
  strokeWeight(5);

  push();
  //fill(186, 152, 121);
  translate(615,130);
  triangle(40, 75, 60, 35, 80, 75);
  pop();
  
  rect(675, 235, 50, 65);
  rect(675, 380, 100, 65);
  rect(675, 325, 75, 175);
  
  push();
  strokeWeight(3);
  line(675, 130, 675, 170);
  
  line(663, 235, 663, 205);
  line(675, 235, 675, 205);
  line(687, 235, 687, 205);
  
  line(655, 240, 655, 425);
  line(675, 240, 675, 425);
  line(695, 240, 695, 425);
  
  line(637, 250, 710, 250);
  line(637, 275, 710, 275);
  line(637, 300, 710, 300);
  line(637, 325, 710, 325);
  line(637, 350, 710, 350);
  line(637, 375, 710, 375);
  line(637, 400, 710, 400);
  
  line(628, 360, 636, 360);
  line(628, 380, 636, 380);
  line(628, 400, 636, 400);
  
  line(712, 360, 725, 360);
  line(712, 380, 725, 380);
  line(712, 400, 725, 400);
  
  pop();
  
  rect(675, 420, 130, 15);
  
//grand central
  fill(184, 166, 145);
  stroke(89, 70, 48);
  strokeWeight(5);
  
  //building
  rect(435,270,275,175);
  
  //roof
  push();
  fill(186, 152, 121);
  rect(435,230,320,15);
  pop();
  
  push();
  fill(186, 152, 121);
  translate(375,130);
  triangle(0, 75, 60, 10, 120, 75);
  pop();
  
  push();
  strokeWeight(3);
  rect(435,203,80,20);
  
  fill(105, 82, 56);
  circle(435,172,25);
  pop();
  
  fill(186, 152, 121);
  rect(305,190,35,40);
  rect(565,190,35,40);
  
  //windows
  push();
  scale(0.6);
  fill(48, 29, 6);
  translate(525, 420);
  rect(50, 90, 80, 85)
  arc(50, 50, 80, 80, PI, 0, OPEN);
  
  line(50, 10, 50, 130);
  line(25, 20, 25, 130);
  line(75, 20, 75, 130);
  
  line(10, 50, 90, 50);
  line(10, 80, 90, 80);
  line(10, 110, 90, 110);
  pop();
  
  push();
  noStroke();
  fill(105, 82, 56);
  rect(480, 300, 15, 50);
  pop();
  
  push();
  scale(0.6);
  fill(48, 29, 6);
  translate(675, 420);
  rect(50, 90, 80, 85)
  arc(50, 50, 80, 80, PI, 0, OPEN);
  
  line(50, 10, 50, 130);
  line(25, 20, 25, 130);
  line(75, 20, 75, 130);
  
  line(10, 50, 90, 50);
  line(10, 80, 90, 80);
  line(10, 110, 90, 110);
  pop();
  
  push();
  noStroke();
  fill(105, 82, 56);
  rect(390, 300, 15, 50);
  pop();
  
  push();
  scale(0.6);
  fill(48, 29, 6);
  translate(825, 420);
  rect(50, 90, 80, 85)
  arc(50, 50, 80, 80, PI, 0, OPEN);
  
  line(50, 10, 50, 130);
  line(25, 20, 25, 130);
  line(75, 20, 75, 130);
  
  line(10, 50, 90, 50);
  line(10, 80, 90, 80);
  line(10, 110, 90, 110);
  pop();
  
//yankees stadium
  //seats
  push();
  angleMode(DEGREES);
  translate(660, 523);
  scale(0.8);
  rotate(8);

  fill(177, 187, 189);
  ellipse(0, -1, 225, 175);
  fill(145, 154, 156);
  ellipse(0, 7, 200, 150);
  fill(109, 116, 117);
  ellipse(0, 15, 175, 130);
  pop();

  //field
  push();
  translate(643,625);
  scale(0.8);
  angleMode(DEGREES);
  rotate(235);

  fill(93, 156, 81);
  arc(40, 40, 200, 200, 0, 90, PIE); //behind

  fill(138, 93, 45);
  arc(50, 50, 80, 80, 0, 90, PIE); //front

    //small square
    push();
    rotate(-2);
    fill(93, 156, 81);
    strokeWeight(2);
    rect(60, 65, 15, 15, 2);
    pop();

  pop();
  
  
//brooklyn bridge
  push();
  fill(82, 58, 37);
  stroke(46, 27, 11);
  strokeWeight(5);
  strokeJoin(ROUND);
  translate(0,70);
  angleMode(DEGREES);
  
    //cables
    push();
    stroke(92, 89, 85);  
  
    line(247,227,335,385); //right
    line(220,227,333,385);
    line(210,250,325,385);
  
    line(120,257,50,365); //left
    line(150,257,53,365); 
    line(180,257,65,365);
  
    pop();

    //behind vertical (left to right)
    rect(135,360,35,205);  
    rect(160,360,35,220);
    rect(180,360,35,235);
    rect(210,360,35,250);
  
    //shadows (left to right)
    push();
    fill(48, 29, 6);
    rect(153,360,20,180);
    rect(210,360,35,210);
    pop();
  
    //horizontal
    push();
    
    translate(190, 390);
    rotate(5);
  
      //train
      push();
      fill(167, 172, 176);
      stroke(51, 60, 66);
      translate(trainX, 0); //min: -108, max:105
      rect(0,-35,75,35);
  
      if (trainX > 105) {
        dir = 'left'
      } else if (trainX < -108) {
        dir = 'right'
      }
  
      if (dir == 'left') {
        trainX--;
      } else if (dir == 'right') {
        trainX++;
      }
  
      //train doors
      rect(-4,-30,15,25);
      rect(-20,-30,17,25);
  
      //train label
      fill(212, 62, 51);
      noStroke();
      circle(20,-35,12);
      pop();
  
    push();
    blendMode(SOFT_LIGHT);
    fill(186, 152, 121);
    rect(0,-25,290,20);
    pop();

    push();
    rect(0,0,290,35);
    pop();
  
    pop();
  
    //in front vertical
    rect(230,360,35,265);
  pop();

//statue of liberty
  
  //base
  stroke(59, 46, 35);
  strokeWeight(5);
  strokeJoin(ROUND);
 
  fill(117, 95, 75);
  rect(width/2, 570, 125, 25, 2); //top
 
  fill(99, 78, 60);
  rect(width/2, 590, 150, 25, 2); //bottom
  
  push();
  fill(186, 152, 121);
  translate(width/2,0);
  quad(-50, 557, 50, 557, 40, 500, -40, 500);
  pop();
  
  fill(224, 192, 162);
  rect(width/2, 495, 100, 15, 2);
  
  //statue
  fill(76, 133, 68);
  stroke(64, 36, 15);
  strokeWeight(5);
  
  //neck 
  rect(width/2, 345, 20, 15, 2);
  
  //spikes
  angleMode(RADIANS);
  
  push();
  strokeWeight(2);
  translate(width/2,310);

  triangle(0, -75, -5, -20, 5, -20); //n

    push();
    rotate(QUARTER_PI);
    triangle(0, -60, -5, -20, 5, -20); //ne
    pop();

    push();
    rotate(-QUARTER_PI);
    triangle(0, -60, -5, -20, 5, -20); //nw
    pop();

    push();
    rotate(HALF_PI);
    triangle(0, -45, -5, -20, 5, -20); //e
    pop();

    push();
    rotate(-HALF_PI);
    triangle(0, -45, -5, -20, 5, -20); //w
    pop();
  
  pop();
  
  //head
  push();
  fill(163, 137, 118);
  translate(width/2,0);
  ellipse(0, 310, 50, 60);
  pop();
  
  push();
  fill(99, 68, 45);
  arc(width/2, height/2 - 45, 60, 70, PI, 0, CHORD);
  pop();
  
  //left arm
  push();
  fill(92, 148, 84);
  translate(width/2,0);
  quad(-20, 350, -60, 275, -95, 290, -25, 380); //br, tr, tl, bl
  pop();
  
  //book
  push();
  fill(46, 82, 41);
  translate(width/2,0);
  quad(40, 345, 75, 375, 30, 425, 0, 425); //tl, tr, br, bl
  pop();
  
  push();
  pop();
  
  //body
  push();
  fill(46, 82, 41);
  rect(width/2, 480, 100, 15, 2);
  pop();
  
  push();
  translate(width/2,0);
  quad(-50, 473, 50, 473, 20, 350, -20, 350);
  pop();
  
  //golden
  fill(235, 181, 45);
  stroke(138, 77, 8);
  strokeWeight(5);
  
  push();
  translate(width/2,310);

    push();
    //rotate(-QUARTER_PI);
    arc(-87, -47, 40, 40, -QUARTER_PI, PI, CHORD);
    pop();
  
  pop();
  
//glass dome
  push();
  translate(0, -150);
  stroke(238, 237, 255);
  strokeWeight(10);
  fill('rgba(181, 232, 227,0.2)');
  //arc(width / 2, height / 2 + 245, 800, 1000, PI, 0, CHORD);
  //bezier(24, 592, 16, 14, 881, 15, 880, 593);
  bezier(20,780, 20, 20, 880, 20, 880, 780);
  pop();
  
  //dome bottom
  stroke(238, 237, 255);
  strokeWeight(10);
  line(20, 630, 880, 630);
  
}