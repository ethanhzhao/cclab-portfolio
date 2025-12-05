const outfits = [];
const outfitColors = {};
const outfitImages = {};
let bkgdCol;

let dayArr;

let resetBtn, leftBtn, rightBtn;
let time = 0;

function preload() {
  outfitImages.jacket = [];
  outfitImages.shirt = [];
  outfitImages.pants = [];
  outfitImages.socks = [];
  
  const outfitCount = 7;

  outfitImages.jacket.push(loadImage('./images/jacket0.png'));
  outfitImages.jacket.push(loadImage('./images/jacket1.png'));
  outfitImages.jacket.push(null);
  outfitImages.jacket.push(loadImage('./images/jacket3.png'));
  outfitImages.jacket.push(loadImage('./images/jacket4.png'));
  outfitImages.jacket.push(null);
  outfitImages.jacket.push(loadImage('./images/jacket6.png'));
  
  outfitImages.shirt.push(loadImage('./images/shirt0.png'));
  outfitImages.shirt.push(loadImage('./images/shirt1.png'));
  outfitImages.shirt.push(loadImage('./images/shirt2.png'));
  outfitImages.shirt.push(loadImage('./images/shirt3.png'));
  outfitImages.shirt.push(loadImage('./images/shirt4.png'));
  outfitImages.shirt.push(loadImage('./images/shirt5.png'));
  outfitImages.shirt.push(loadImage('./images/shirt6.png'));
  
  outfitImages.pants.push(loadImage('./images/pants0.png'));
  outfitImages.pants.push(loadImage('./images/pants1.png'));
  outfitImages.pants.push(loadImage('./images/pants2.png'));
  outfitImages.pants.push(loadImage('./images/pants3.png'));
  outfitImages.pants.push(loadImage('./images/pants4.png'));
  outfitImages.pants.push(loadImage('./images/pants5.png'));
  outfitImages.pants.push(loadImage('./images/pants6.png'));
  
  outfitImages.socks.push(loadImage('./images/socks0.png'));
  outfitImages.socks.push(loadImage('./images/socks1.png'));
  outfitImages.socks.push(loadImage('./images/socks2.png'));
  outfitImages.socks.push(loadImage('./images/socks3.png'));
  outfitImages.socks.push(loadImage('./images/socks4.png'));
  outfitImages.socks.push(loadImage('./images/socks5.png'));
  outfitImages.socks.push(loadImage('./images/socks6.png'));
  
}

function setup() {
  noStroke();
  createCanvas(1050, 600);
  bkgdCol = color(242, 237, 223);
  
  dayArr = ['THURS', 'FRI', 'SAT', 'SUN', 'MON', 'TUES', 'WED'];
  
  outfitColors.jacket = [
    [ color(197, 85, 66) ], // jacket 0 color
    [ color(60, 57, 53) ],  // jacket 1 color
    [ bkgdCol ],// background color
    [ color(180, 168, 158) ],// jacket 3 color
    [ color(196, 180, 160) ],  // jacket 4 color
    [ bkgdCol ],  // background color
    [ color(212, 192, 182) ] // jacket 6 color
  ];
  
  outfitColors.shirt = [
    [ color(216, 194, 178) ], // shirt 0 color
    [ color(221, 202, 186) ],  // shirt 1 color
    [ color(88, 77, 65) ],// shirt 2 color
    [ color(69, 55, 53) ],// shirt 3 color
    [ color(229, 205, 185) ],  // shirt 4 color
    [ color(216, 183, 163) ],  // shirt 5 color
    [ color(232, 194, 173) ] // shirt 6 color
  ];
  
  outfitColors.pants = [
    [ color(98, 86, 77) ], // pants 0 color
    [ color(188, 175, 166) ],  // pants 1 color
    [ color(160, 155, 149) ],// pants 2 color
    [ color(87, 82, 76) ],// pants 3 color
    [ color(160, 155, 149) ],  // pants 4 color
    [ color(188, 175, 166) ],  // pants 5 color
    [ color(160, 155, 149) ] // pants 6 color
  ];
  
   outfitColors.socks = [
    [ color(205, 148, 72) ], // socks 1 color
    [ color(113, 111, 91) ],  // socks 2 color
    [ color(134, 149, 140) ],// socks 3 color
    [ color(241, 112, 74) ],// socks 4 color
    [ color(214, 193, 162) ],  // socks 5 color
    [ color(174, 131, 82) ],  // socks 6 color
    [ color(208, 183, 168) ] // socks 7 color
  ];
  
  //chain, stain, heart, one/two/threeYrs
  let outfitData = [
    //thursday outfit
    {
      jacket: [],
      shirt: [],
      pants: [],
      socks: [ { type: 'stain', x: 0.5, y: 0.5, size: 0.125},  { type: 'twoYrs', x: 0.5, y: 0.5, size: 0.5 } ]
    },
    //friday outfit
    {
      jacket: [],
      shirt: [ { type: 'chain', x: 0.5, y: 0.36, size: 0.5 }, { type: 'stain', x: 0.5, y: 0.62, size: 0.125 } ],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'stain', x: 0.5, y: 0.5, size: 0.125 }, { type: 'threeYrs', x: 0.5, y: 0.5, size: 0.5 } ]
    }, 
    //saturday outfit
    {
      jacket: [],
      shirt: [ { type: 'heart', x: 0.5, y: 0.36, size: 0.5 } ],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'oneYr', x: 0.5, y: 0.5, size: 0.5} ]
    }, 
    //sunday outfit
    {
      jacket: [],
      shirt: [ { type: 'chain', x: 0.5, y: 0.36, size: 0.5 } ],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'heart', x: 0.5, y: 0.5, size: 0.5 }, { type: 'threeYrs', x: 0.5, y: 0.5, size: 0.5} ]
    }, 
    //monday outfit
    {
      jacket: [ { type: 'heart', x: 0.5, y: 0.36, size: 0.5 } ],
      shirt: [],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'stain', x: 0.5, y: 0.5, size: 0.125 }, { type: 'threeYrs', x: 0.5, y: 0.5, size: 0.5 } ]
    }, 
    //tuesday outfit
    {
      jacket: [],
      shirt: [ { type: 'heart', x: 0.5, y: 0.36, size: 0.5 }, { type: 'stain', x: 0.5, y: 0.62, size: 0.125 } ],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'heart', x: 0.5, y: 0.5, size: 0.5 }, { type: 'twoYrs', x: 0.5, y: 0.5, size: 0.5 } ]
    }, 
    //wednesday outfit
    {
      jacket: [ { type: 'heart', x: 0.5, y: 0.36, size: 0.5 } ],
      shirt: [ { type: 'chain', x: 0.5, y: 0.36, size: 0.5 } ],
      pants: [ { type: 'chain', x: 0.5, y: 0.20, size: 0.5 } ],
      socks: [ { type: 'stain', x: 0.5, y: 0.5, size: 0.125 }, { type: 'twoYrs', x: 0.5, y: 0.5, size: 0.5 } ]
    }, 
  ];
  
  const outfitCount = 7;
  const gapCount = outfitCount + 1;
  const gapWidth = 15;
  const totalGapWidth = gapCount * gapWidth;
  
  const totalOutfitWidth = width - totalGapWidth;
  const outfitWidth = totalOutfitWidth / outfitCount;
  
  for (i = 0; i < outfitCount; i++) {
    let x = gapWidth + i * (outfitWidth + gapWidth);
    let columnIndex = i;
    let thisOutfitData = outfitData[i];
    
    let clothingItems = [
      { name: 'jacket', x: x, y: height/2-235, w: outfitWidth, h: 100, optionIndex: 0, columnIndex: columnIndex, shapes: thisOutfitData.jacket, rand: random(1000) }, 
      { name: 'shirt', x: x, y: height/2-130, w: outfitWidth, h: 100, optionIndex: 0, columnIndex: columnIndex, shapes: thisOutfitData.shirt, rand: random(1000) }, 
      { name: 'pants', x: x, y: height/2-25, w: outfitWidth, h: 180, optionIndex: 0, columnIndex: columnIndex, shapes: thisOutfitData.pants, rand: random(1000) },
      { name: 'socks', x: x, y: height/2+160, w: outfitWidth, h: 75, optionIndex: 0, columnIndex: columnIndex, shapes: thisOutfitData.socks, rand: random(1000) },
    ];
    outfits.push(clothingItems);
  }
  
  leftBtn = createButton('<');
  leftBtn.position(width / 2 - 65, height - 35);
  leftBtn.mousePressed(() => {
    for (let i  = 0; i < outfits.length; i++) {
      let clothingItems = outfits[i];
      for (let j = 0; j < clothingItems.length; j++) {
        let item = clothingItems[j];
        item.optionIndex = (item.optionIndex + 2) % 3;
      }
    }
    console.log('<: back');
  });
  
  resetBtn = createButton('Reset');
  resetBtn.position(width / 2 - 24, height - 35);
  resetBtn.mousePressed(() => {
    for (let i  = 0; i < outfits.length; i++) {
      let clothingItems = outfits[i];
      for (let j = 0; j < clothingItems.length; j++) {
        let item = clothingItems[j];
        item.optionIndex = 0;
      }
    }
    console.log('<: reset :>');
  });
  
  rightBtn = createButton('>');
  rightBtn.position(width / 2 + 43, height - 35);
  rightBtn.mousePressed(() => {
    for (let i  = 0; i < outfits.length; i++) {
      let clothingItems = outfits[i];
      for (let j = 0; j < clothingItems.length; j++) {
        let item = clothingItems[j];
        item.optionIndex = (item.optionIndex + 1) % 3;
      }
    }
    console.log('forward :>');
  });
  
  
}

function draw() {
  background(bkgdCol);
  time += 0.015;

  for (let i = 0; i < outfits.length; i++) {
    let clothingItems = outfits[i];
    for (let j = 0; j < clothingItems.length; j++) {
      let item = clothingItems[j];
      
      fill(66, 52, 44);
      if (dayArr[item.columnIndex].length == 4 || dayArr[item.columnIndex].length == 5) {
        text(dayArr[item.columnIndex], item.x + 45, 50);
        console.log(dayArr[item.columnIndex]);
      } else if (dayArr[item.columnIndex].length === 3) {
        text(dayArr[item.columnIndex], item.x + 52, 50);
      }
      
      // fill(66, 52, 44);
      // text(dayArr[item.columnIndex], item.x + 50, 50);
      
      //check for index
      if (item.optionIndex === 0) {
        let col = outfitColors[item.name][item.columnIndex][0];
        fill(col);
        rect(item.x, item.y, item.w, item.h, 5);
        
      } else if (item.optionIndex === 1) {
        let col = outfitColors[item.name][item.columnIndex][0];
        fill(col);
        rect(item.x, item.y, item.w, item.h, 5);
        
        for (let k = 0; k < item.shapes.length; k++) {
          let dataShape = item.shapes[k];
          let centerX = item.x + item.w * dataShape.x;
          let centerY = item.y + item.h * dataShape.y;
          let shapeSize = min(item.w, item.h) * dataShape.size;
          drawData(dataShape.type, centerX, centerY, shapeSize);
        }
      } else if (item.optionIndex === 2) {
        let currImage = outfitImages[item.name][item.columnIndex];
        
        if (currImage != null) {
          let noiseX = noise(item.rand + time);
          let noiseY = noise(item.rand + 10000 + time);
          
          let wiggleX = map(noiseX, 0, 1, -2, 2);
          let wiggleY = map(noiseY, 0, 1, -2, 2);
          
          image(currImage, item.x + wiggleX, item.y + wiggleY, item.w, item.h);
          // noFill();
          // rect(item.x, item.y, item.w, item.h, 5);
        }
      }
    }
  }
}

//draw based on type: chain, stain, heart, one/two/threeYrs
function drawData(dataType, cx, cy) {
  noStroke();
  fill(255, 255, 255);
  
  push();
  translate(cx, cy);
  
  switch (dataType) {
    case 'chain':
      push();
      translate(-55, -25);
      angleMode(DEGREES);
      rotate(-45);
      noFill();
      stroke(255, 255, 255);
      strokeWeight(2.5);
      ellipse(-8, 0, 9, 5);
      ellipse(0, 0, 9, 5);
      ellipse(8, 0, 9, 5);
      pop();
      break;
    case 'stain':
      ellipse(55, 25, 5, 5);
      ellipse(40, 25, 5, 5);
      ellipse(55, 10, 5, 5);
      break;
    case 'heart':
      ellipse(54.5, -25, 10, 10);
      ellipse(45.5, -25, 10, 10);
      triangle(60, -25, 40, -25, 50, -10);
      break;
    case 'oneYr':
      push();
      translate(-55, 25);
      angleMode(DEGREES);
      rotate(-45);
      noFill();
      stroke(255, 255, 255);
      strokeWeight(3);
      line(0,-5,0,5);
      pop();
      break;
    case 'twoYrs':
      push();
      translate(-55, 25);
      angleMode(DEGREES);
      rotate(-45);
      noFill();
      stroke(255, 255, 255);
      strokeWeight(3);
      line(0,-5,0,5);
      line(8,-8,8,8);
      pop();
      break;
    case 'threeYrs':
      push();
      translate(-55, 25);
      angleMode(DEGREES);
      rotate(-45);
      noFill();
      stroke(255, 255, 255);
      strokeWeight(3);
      line(-2,-5,-2,5);
      line(6,-8,6,8);
      line(14,-12,14,12);
      pop();
      break;
  }
  pop();
}


function mousePressed() {
  for (let i = 0; i < outfits.length; i++) {
    for (let j = 0; j < outfits[i].length; j++) {
      let item = outfits[i][j];
      if (mouseX > item.x && mouseX < item.x + item.w && mouseY > item.y && mouseY < item.y + item.h) {
        item.optionIndex = (item.optionIndex + 1) % 3;
        console.log(`Cycled ${item.name} in outfit #${i + 1} to option ${item.optionIndex}`);
        return; 
      }
    }
  }
}

  // for (let i = 0; i < outfitCount; i++) {
  //   const x = gapWidth + i * (outfitWidth + gapWidth);
  //   rect(x, height / 2 - 235, outfitWidth, 100, 5);
  //   rect(x, height / 2 - 130, outfitWidth, 100, 5);
  //   rect(x, height / 2 - 25, outfitWidth, 180, 5);
  //   rect(x, height / 2 + 160, outfitWidth, 70, 5);
  // }
  
