let sqrSize, radius, numCol, numRow;
let sandImg, blueUmb, tealUmb, redUmb, yellowUmb;
let sb1, sb2, sf1, sf2, sl1, sl2, sr1, sr2, wb1, wb2, wf1, wf2, wl1, wl2, wr1, wr2;
let currImg;
let state = 1;

let dir;
let swim = false;
let charX, charY, shadowY;

let debug = false;

function preload() {
  sandImg = loadImage('./images/sand.jpg');
  
  blueUmb = loadImage('./images/blueumbrella.png');
  tealUmb = loadImage('./images/tealumbrella.png');
  redUmb = loadImage('./images/redumbrella.png');
  yellowUmb = loadImage('./images/yellowumbrella.png');
  
  //swim back
  sb1 = loadImage('./images/sprites/sb1.png');
  sb2 = loadImage('./images/sprites/sb2.png');
  
  //swim forward
  sf1 = loadImage('./images/sprites/sf1.png');
  sf2 = loadImage('./images/sprites/sf2.png');
  
  //swim left
  sl1 = loadImage('./images/sprites/sl1.png');
  sl2 = loadImage('./images/sprites/sl2.png');
  
  //swim right
  sr1 = loadImage('./images/sprites/sr1.png');
  sr2 = loadImage('./images/sprites/sr2.png');
  
  //walk back
  wb1 = loadImage('./images/sprites/wb1.png');
  wb2 = loadImage('./images/sprites/wb2.png');
  
  //walk forward
  wf1 = loadImage('./images/sprites/wf1.png');
  wf2 = loadImage('./images/sprites/wf2.png');
  
  //walk left
  wl1 = loadImage('./images/sprites/wl1.png');
  wl2 = loadImage('./images/sprites/wl2.png');
  
  //walk right
  wr1 = loadImage('./images/sprites/wr1.png');
  wr2 = loadImage('./images/sprites/wr2.png');
}

function setup() {
  createCanvas(600, 800);
  noStroke();
  rectMode(CENTER);
 
  currImg = wf1;
  charX = 200;
  charY = 500;
  shadowY = charY + 55;
  
  console.log("USE WASD OR < ^ v > KEYS TO MOVE GUY")
}

function draw() {
  background(240, 233, 225);
  beachScene();
  
  if (charY <= 415) {
    swim = true;
  } else {
    swim = false;
  }
  //console.log(swim);
  
  switch (dir) {
    case 'left':
      
      if (swim) {
        shadowY = charY + 41;
        if (state == 1) {
          currImg = sl1;
        } else if (state == -1) {
          currImg = sl2;
        }
      } else {
        shadowY = charY + 55;
        if (state == 1) {
          currImg = wl1;
        } else if (state == -1) {
          currImg = wl2;
        }
      }
    break;
    
    case 'right':
      if (swim) {
        shadowY = charY + 41;
        if (state == 1) {
          currImg = sr1;
        } else if (state == -1) {
          currImg = sr2;
        }
      } else {
        shadowY = charY + 55;
        if (state == 1) {
          currImg = wr1;
        } else if (state == -1) {
          currImg = wr2;
        }
      }
    break;
    
    case 'forward':
      if (swim) {
        shadowY = charY + 41;
        if (state == 1) {
          currImg = sf1;
        } else if (state == -1) {
          currImg = sf2;
        }
      } else {
        shadowY = charY + 55;
        if (state == 1) {
          currImg = wf1;
        } else if (state == -1) {
          currImg = wf2;
        }
      }
    break;
    
    case 'back':
      if (swim) {
        shadowY = charY + 41;
        if (state == 1) {
          currImg = sb1;
        } else if (state == -1) {
          currImg = sb2;
        }
      } else {
        shadowY = charY + 55;
        if (state == 1) {
          currImg = wb1;
        } else if (state == -1) {
          currImg = wb2;
        }
      }
    break;
  }
  
  push();
  rectMode(CORNER);
  scale(1.25);
  push();
  blendMode(MULTIPLY);
  fill(46, 45, 44, 70);
  rect(charX + 17, shadowY, 30, 8, 50);
  
  // other shadow method with blur
  // for (let i = 0; i < 10; i++) {
  //   let alpha = map(i, 0, 10, 10, 0);
  //   let weight = map(i, 0, 10, 1, 10);
  //   stroke(46, 45, 44, alpha);
  //   strokeWeight(weight);
  //   fill(46, 45, 44, 30);
  //   rect(charX + 27 - i, shadowY + 5 - i, 15 + 2 * i, 0.5 + 1.5 * i, 50);
  // }
  
  pop();
  image(currImg, charX, charY, 64, 64);
  pop();
  
  if ((keyIsDown(LEFT_ARROW) || keyIsDown('65')) && charX >= -10) {
    dir = 'left';
    charX -= 3;
    if (frameCount % 10 == 0) {
      state = -state;
    }
    
  }
  
  if ((keyIsDown(RIGHT_ARROW) || keyIsDown('68')) && charX <= 425) {
    dir = 'right'
    charX += 3;
    if (frameCount % 10 == 0) {
      state = -state;
    }
  }
  
  if ((keyIsDown(UP_ARROW) || keyIsDown('87')) && charY >= 0) {
    dir = 'back';
    charY -= 3;
    if (frameCount % 10 == 0) {
      state = -state;
    }
  }
  
  if ((keyIsDown(DOWN_ARROW) || keyIsDown('83')) && charY <= 570) {
    dir = 'forward';
    charY += 3;
    if (frameCount % 10 == 0) {
      state = -state;
    }
  }
  
  //console.log(charX, charY);
  umbrellas();
}

function beachScene() {
  sqrSize = 30;
  radius = 8;
  numCol = width / sqrSize;
  numRow = (height - 200) / sqrSize;
  
  blackBits();
  sand();
  if (!debug) {
    waves();
  }
  
}

function waves() {
  for (let i = 0; i < numCol; i++) {
    for (let j = 0; j < numRow; j++) {
      if ((i + j) % 2 === 0) {
        fill(174, 215, 230); // light blue
      } else {
        fill(46, 73, 128); // dark blue
      }
      
      let x = i * sqrSize + sqrSize / 2;
      let y = j * sqrSize + sqrSize / 2;
      rect(x, y, sqrSize, sqrSize, radius);
      
      // debug
      // let testStr = i.toString() + ', ' + j.toString();
      // fill(30); // Dark text color
      // textSize(10);
      // textFont('monospace');
      // text(testStr, x-10, y);
    }
  } 
}

function blackBits() {
  // push();
  // fill(0);
  // triangle(0,0, width, 0, 600, width);
  // pop();
  
  for (let i = 0; i < numCol; i++) {
    let yValues = generatePattern(i, numCol);
    if (debug) {
      console.log(yValues);
      noLoop();
    } else {
      loop();
    }
    
    for (let j = 0; j <= numRow; j++) {
      if (yValues.includes(j)) {
        //console.log(i, j);

        fill(0);
        let x = i * sqrSize;
        let y = j * sqrSize;
        rect(x, y, 20, 20, 0);
        
        //opposite side
        
        // fill(240, 233, 225);
        // rect(y, x, 20, 20, 0);
        
        rect(y, x, 20, 20, 0);
        
        //debug
        if (debug) {
          
          let testStr = i.toString() + ', ' + j.toString();
          fill(255); // Dark text color
          textSize(6);
          textFont('monospace');
          text(testStr, x-7, y);
        }
      }
    }
  }
}

function generatePattern(n, numTerms) {
  const pattern = [];
  for (let i = 0; i < numTerms; i++) {
    // 1. Calculate the i-th term of the base sequence (the n=0 pattern)
    const baseTerm = 2 * (i % 2) + 8 * floor(i / 4) + 3 * (floor(i / 2) % 2);
    
    // 2. Add the offset 'n' to create the shifted term
    const shiftedTerm = baseTerm + n;
    
    pattern.push(shiftedTerm);
  }
  return pattern;
}

function sand() {
  push();
  rectMode(CORNER);
  fill(179, 156, 114);
  rect(0, 580, 800, 220);
  
  blendMode(SOFT_LIGHT);
  scale(1.25,1);
  image(sandImg, 0, 580)
  pop();
}

function umbrellas() {
  scale(0.25);
  image(blueUmb, 50, 2550);
  image(tealUmb, 550, 2750);
  image(redUmb, 1300, 2700);
  image(yellowUmb, 1850, 2600);
}