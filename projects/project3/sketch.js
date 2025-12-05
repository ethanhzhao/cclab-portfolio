let trainX;
let trainSpeed = 10;
let train0Visible = false; //left to right
let train1Visible = false; //right to left
const trainLength = 900;

let train0Sound, train1Sound, ambience;

let muteFlag = -1; //-1 mute, 1 mute

let randNum;

let nightColor;
let dayColor;

let state = 0;
let timePassed;

const holdTime = 5000;
const transitionTime = 3000;

function preload() {
  train0Sound = loadSound('assets/trainsounds.mp3');
  train1Sound = loadSound('assets/trainsounds.mp3');
  ambience = loadSound('assets/ambience.mp3');
}

function setup() {
  createCanvas(800, 600);

  train0Sound.setVolume(0);
  train0Sound.loop();
  train1Sound.setVolume(0);
  train1Sound.loop(0, 1, 0, 69);
  
  ambience.setVolume(0.15);
  ambience.loop();
  
  trainX = -trainLength;
  
  nightColor = color(27, 11, 56);
  dayColor = color(92, 154, 209);
  timePassed = millis();
}


function draw() {
  // console.log('0: ' + train0Sound.isPlaying());
  // console.log('1: ' + train1Sound.isPlaying());
  //background(12, 32, 56);
  
  drawBackground();
  drawPlatform();

  let interval = 8;
  if (second() % interval == 0 && !train0Visible) {
    train0Visible = true;
    trainX = -trainLength;
  }
        
  if (train0Visible) {
    playTrainSound();
    drawTrain(0);
    randNum = int(random(-15, 20));
    trainX = trainX + randNum + trainSpeed;

  if (trainX > width + 100) {
    train0Visible = false;
    train0Sound.fade(0, 1.5);
  }
  }
  
  let interval2 = 11;
  if (second() % interval2 == 5 && !train1Visible) {
    train1Visible = true;
    trainX = -trainLength;
  }
        
  if (train1Visible) {
    playTrainSound();
    drawTrain(1);
    randNum = int(random(-15, 30));
    trainX = trainX + randNum + trainSpeed;

  if (trainX > width + 100) {
    train1Visible = false;
    train1Sound.fade(0, 2);
  }
  }
  
  //over train
  //platform
  fill(125, 114, 80);
  rect(0, 500, width, 100);

  //platform yellow
  fill(255, 220, 0);
  rect(0, 500, width, 15);
}

function drawPlatform() {
  noStroke();

  //other side
  fill(82, 75, 55);
  rect(0, 360, width, 40);
        
  //track
  fill(38, 36, 31);
  rect(0, 400, width, 100);
  
  //platform yellow other side
  fill(199, 172, 0);
  rect(0, 390, width, 10);
        
  //rails
  fill(100);
  rect(0, 420, width, 5);
  rect(0, 475, width, 5);
      
  //platform
  fill(182, 75, 55);
  rect(0, 500, width, 100);

  //platform yellow
  fill(255, 220, 0);
  rect(0, 500, width, 15);
}

function drawTrain(dir) {
  push();
  // 0 = left to right
  // 1 = right to left
  if (dir == 1) {
    scale(-1, 1);
    translate(trainX - trainLength, 385);
  } else {
    translate(trainX, 320);
  }
  
  noStroke();
  
  //train body
  fill(186, 188, 194);
  rect(0,0, trainLength, 120, 5);
  
  //windows
  fill(140, 157, 207);
  for (let x = 40; x < trainLength - 100; x += 160) {
    rect(x, 20, 120, 50, 5);
  }
  
  //front window
  rect(trainLength - 60, 20, 60, 70, 5, 0, 0, 5);
  fill(41, 48, 71);
  rect(trainLength - 55, 25, 55, 60, 5, 0, 0, 5);
  
  pop();
}

function playTrainSound() {
  //console.log(getOutputVolume());
  if (train0Visible) {
    //console.log('0 play');
    train0Sound.fade(0.25, 0.75);
  }
  
  if (train1Visible) {
    //console.log('1 play');
    train1Sound.fade(1, 1);
  }
  
}

function keyPressed() {
  // if (key == '0') {
  //   playTrainSound();
  // } else if (key == '1') {
  //   playTrainSound();
  // }
  //console.log(outputVolume().value);
  
  if (key == 'm') {
    if (outputVolume().value == 1) {
      outputVolume().value = 0;
    } else {
      outputVolume().value = 1;
    }
    
    //console.log(outputVolume());
    
  }
}

function drawBackground() {
  //console.log(state);
  let amt;

  let currTime = millis() - timePassed;
  
  //0 = blue, 1 = move to orange, 2 = orange, 3 = move to blue
  switch (state) {
    case 0: //hold blue
      amt = 0;
      if (currTime > holdTime) {
        state = 1;
        timePassed = millis(); //reset
      }
      break;
    case 1: //transition to orange
      amt = map(currTime, 0, transitionTime, 0, 1);
      if (currTime > transitionTime) {
        state = 2;
        timePassed = millis();
      }
      break;
    case 2: //hold orange
      amt = 1
      if(currTime > holdTime) {
        state = 3;
        timePassed = millis();
      }
      break;
    case 3:
      amt = map(currTime, 0, transitionTime, 1, 0);
      if (currTime > transitionTime) {
        state = 0;
        timePassed = millis();
      }
      break;
  }
  
  let interpolatedColor = lerpColor(nightColor, dayColor, amt);
  background(interpolatedColor);
  
}

