let button;
let theme;
let head, body, legs, copter;

let cat, frog, bear, raccoon, animalArr;
let index = 0;

let cX = 200;
let cY = -150;
//-150 start, -10 target

let canvas, bkgdColor, hue;
let party = false;

function preload() {
  theme = loadSound('./audio/theme.mp3');
  
  canvas = loadImage('./images/canvas.jpg');
  
  head = loadImage('./images/head.png');
  body = loadImage('./images/body.png');
  legs = loadImage('./images/legs.png');
  
  cat = loadImage('./images/cat.png');
  frog = loadImage('./images/frog.png');
  bear = loadImage('./images/bear.png');
  raccoon = loadImage('./images/raccoon.png');
  fish = loadImage('./images/fish.png');
  
  copter = createImg('./images/copter.gif', 'doraemon helicopter hat');
  copter.hide();
}

function setup() {
  createCanvas(600, 800);

  button = createButton('Party Mode!');
  button.position(475,300);
  button.mousePressed(buttonPress);
  
  colorMode(HSB, 100);
  bkgdColor = color(0, 5, 100);
  hue = 0;
  
  animalArr = ['cat', 'frog', 'bear', 'raccoon', 'fish'];
}

function draw() {  
  
  if (party) {
    button.html('Normal Mode');
    
    if (!theme.isPlaying()) {
      theme.loop(0, 1, 0.5, 1);
      
    }
    
    updateBkgdColor();
    updateIndex();
    
    background(bkgdColor); 
    copterAppear();
    corpse(); 
    animalShow(index);
    
  } else {
    reset();
    background(bkgdColor);
    corpse();
  }
  
  canvasTexture();
}

function buttonPress() {
  party = !party;
}

function reset() {
  index = 0;
  cX = 200;
  cY = -150;
  copter.hide();
  bkgdColor = color(0, 5, 100);
  button.html('Party Mode!');
  theme.stop();
}

function corpse(){
  push();
  translate(-20, 0);
  image(head, 0, 0);
  image(body, 0, 0);
  image(legs, 0, 0);
  pop();
}

function canvasTexture() {
  push();
  angleMode(DEGREES);
  blendMode(MULTIPLY);
  translate(600, 0);
  rotate(90);
  scale(1.5);
  image(canvas, 0, 0);
  pop();
}

function updateBkgdColor() {
  bkgdColor = color(hue, 15, 90);
    
  hue += 1;

  if (hue > 100) {
    hue = 0;
  }
}

function updateIndex() {
  if (frameCount % 25 == 0) {
      index++
      
      if (index > 4) {
        index = 0;
      }
    }  
}

function copterAppear() {
  copter.show();
  copter.position(cX, cY);

  if (cY < -10) {
    cY++;
    //console.log(cY);
  }
}

function animalShow(animalInd) {
  let animal = animalArr[animalInd];
  
  switch (animal) {
    case 'cat':
      image(cat, -20, 0);
      break;
    case 'frog':
      image(frog, -20, 0);
      break;
    case 'bear':
      image(bear, -20, 0);
      break;
    case 'raccoon':
      image(raccoon, -20, 0);
      break;
    case 'fish':
      image(fish, -20, 0);
      break;
  }
}