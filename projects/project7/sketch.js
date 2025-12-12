let currentScene = 'start'; 
let p5Canvas;
let isLocked = false;
let backgroundMusic;
let musicStarted = false;

let mirrorLevelComplete, bathroomLevelComplete, mazeLevelComplete = false;

let playerImg, doorImg;
let speechBubble1, speechBubble2, speechBubble3, speechBubble4, speechBubble5;
let floorTexture, wallTexture;
let font;

let bathroomPeopleImg;

let clothes1Img, clothes1_noImg, clothes2Img, clothes2_noImg, clothes3Img, clothes3_noImg, clothes4Img, clothes4_noImg, clothes5Img, clothes5_noImg;

let player = { x: 0, y: 0, w: 80, h: 160 };
let playerSpeed = 5;

const PLAYER_FRAME_WIDTH = 80;
const PLAYER_FRAME_HEIGHT = 160;
const PLAYER_ANIM_SPEED = 8; // Show new frame every 8 game frames
let playerAnimate = {
    frame: 0,
    dir: 0, // 0:down, 1:right, 2:left, 3:up
    isMoving: false
};

// UI Buttons
let controlsButton = { x: 0, y: 10, w: 200, h: 40, padding: 10 };
let controlsEnabled = false; // Master switch for audio and scroll lock

//fade function
let isFading = false;
let isFadeOut = true; // true = fade to black, false = fade from black
let fadeStartTime = 0;
let fadeDuration = 1000;
let fadeDelay = 0;
let fadeTargetScene = '';

const ZOOM_DURATION = 2000; // 2 seconds for zoom
const FADE_DURATION = 1000; //1 second for fade
const FADE_DELAY_DURATION = 2000;

function preload() {
    titleImg = loadImage('./images/titlespritesheet.png')
    playerImg = loadImage('./images/walkingspritesheet.png');
    shadowImg = loadImage('./images/shadow.png')
    doorImg = loadImage('./images/doorspritesheet.png');
    brainImg = loadImage('./images/braintile.png');

    mirrorBkgdImg = loadImage('./images/mirrorBkgd.png');
    mirrorImg = loadImage('./images/mirror.png');
    mirror_reflectImg = loadImage('./images/mirror_reflect.png');

    clothes1Img = loadImage('./images/clothes1.png');
    clothes1_noImg = loadImage('./images/clothes1_no.png');
    clothes2Img = loadImage('./images/clothes2.png');
    clothes2_noImg = loadImage('./images/clothes2_no.png');
    clothes3Img = loadImage('./images/clothes3.png');
    clothes3_noImg = loadImage('./images/clothes3_no.png');
    clothes4Img = loadImage('./images/clothes4.png');
    clothes4_noImg = loadImage('./images/clothes4_no.png');
    clothes5Img = loadImage('./images/clothes5.png');
    clothes5_noImg = loadImage('./images/clothes5_no.png');

    speechBubbleMad = loadImage('./images/speechBubbleMad.png');
    speechBubbleThumbsDown = loadImage('./images/speechBubbleThumbsDown.png');
    speechBubbleHeartbreak = loadImage('./images/speechBubbleHeartbreak.png');

    speechBubble1 = loadImage('./images/speechBubble1.png');
    speechBubble2 = loadImage('./images/speechBubble2.png');
    speechBubble3 = loadImage('./images/speechBubble3.png');
    speechBubble4 = loadImage('./images/speechBubble4.png');
    speechBubble5 = loadImage('./images/speechBubble5.png');

    bathroomPeopleImg = loadImage('./images/bathroompplspritesheet.png');
    toiletsImg = loadImage('./images/toilets.png');
    toiletOpenImg = loadImage('./images/toilet_open.png');
    toiletClosedImg = loadImage('./images/toilet_closed.png');
    sinksImg = loadImage('./images/sinks.png');
    bathroomTileImg = loadImage('./images/bathroomtile.png');

    floorTexture = loadImage('placeholdertexture.jpeg');
    wallTexture = loadImage('./images/mazewall.png');

    finalImg = loadImage('./images/final.gif');

    font = loadFont('pixely.ttf')

    backgroundMusic = loadSound('nevermindeverythingsok.mp3'); 
}

function setup() {
    p5Canvas = createCanvas(windowWidth, windowHeight, P2D);
    p5Canvas.parent('sketch-container');
    // Start with the 2D intro scene
    // This function (setupIntro) is defined in introScene.js
    
    setupLevelSelectScene();
    document.addEventListener('pointerlockchange', () => {
        isLocked = (document.pointerLockElement === p5Canvas.elt);
    });
    triggerFade(null, 1000, 0, false);

    setupScrollLock();
}

function draw() {
    //console.log(currentScene);
    // These functions (drawIntro, drawMaze) are
    // defined in their own scene files.
    if (currentScene === 'start') {
        drawStartScene();
    } else if (currentScene === 'mirror') {
        drawMirrorScene();
    } else if (currentScene === 'bathroom') {
        drawBathroomScene();
    } else if (currentScene === 'maze') {
        drawMaze();
    } else if (currentScene === 'final') {
        drawFinalScene();
    }

    drawUIButtons();
    drawFade();
}

function keyPressed() {
    startMusicLoop();

      // DEBUG Scene Switching
    if (keyCode === 49) { // '1'
        switchToScene('start');
        return; // Don't process other keys
    } else if (keyCode === 50) { // '2'
        switchToScene('mirror');
        return;
    } else if (keyCode === 51) { // '3'
        switchToScene('bathroom');
        return;
    } else if (keyCode === 52) { // '4'
        switchToScene('maze');
        return;
    }

    if (currentScene === 'maze') {
        keyPressedMaze(keyCode);
    }
}

function mouseClicked() {
    startMusicLoop();

    // Check for the main controls button click
    if (mouseX > controlsButton.x && mouseX < controlsButton.x + controlsButton.w &&
        mouseY > controlsButton.y && mouseY < controlsButton.y + controlsButton.h) {
        toggleControls();
        return;
    }

    if (currentScene === 'maze') {
        lockPointer();
    } else if (currentScene === 'mirror') {
        mouseClickedMirrorScene();
    } else if (currentScene === 'final') {
        mouseClickedFinalScene();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    if (currentScene === 'start') {
        setupLevelSelectScene();
    } else if (currentScene === 'mirror') {
        setupMirrorScene();
    } else if (currentScene === 'bathroom') {
        setupBathroomScene();
    } else if (currentScene === 'final') {
        setupFinalScene();
    }
}

function switchToScene(sceneName) {
    if (currentScene === sceneName) return;

    if (p5Canvas) {
        p5Canvas.remove();
    }
    
    currentScene = sceneName;

    if (sceneName === 'start') {
        p5Canvas = createCanvas(windowWidth, windowHeight, P2D); // 2D
        p5Canvas.parent('sketch-container');
        exitPointerLock();
        setupLevelSelectScene();
    } else if (sceneName === 'maze') {
        p5Canvas = createCanvas(windowWidth, windowHeight, WEBGL); // 3D
        p5Canvas.parent('sketch-container');
        lockPointer();
        setupMazeScene();
    } else if (sceneName === 'mirror') {
        p5Canvas = createCanvas(windowWidth, windowHeight, P2D); // 2D
        p5Canvas.parent('sketch-container');
        exitPointerLock();
        setupMirrorScene();
    } else if (sceneName === 'bathroom') {
        p5Canvas = createCanvas(windowWidth, windowHeight, P2D); // 2D
        p5Canvas.parent('sketch-container');
        exitPointerLock();
        setupBathroomScene();
    } else if (sceneName === 'final') {
        p5Canvas = createCanvas(windowWidth, windowHeight, P2D); // 2D
        p5Canvas.parent('sketch-container');
        exitPointerLock();
        setupFinalScene();
    }

    // Re-apply scroll lock to the new canvas after a scene change
    setupScrollLock();
    triggerFade(null, 1000, 0, false);
}

function lockPointer() {
    if (!isLocked) {
        requestPointerLock();
    }
}

function exitPointerLock() {
    if (isLocked) {
        document.exitPointerLock();
    }
}

function startMusicLoop() {
    if (backgroundMusic.isLoaded() && !musicStarted) {
        backgroundMusic.loop();
        backgroundMusic.setVolume(0.3); // Set volume to 30%
        musicStarted = true;
    }
}

function toggleControls() {
    controlsEnabled = !controlsEnabled;

    // Update music volume based on the new state
    if (controlsEnabled) {
        backgroundMusic.setVolume(0.3);
        disableScroll();
    } else {
        backgroundMusic.setVolume(0);
        // If we are disabling controls, make sure to remove any active scroll listeners
        enableScroll();        
    }
}

function handlePlayerAnimation(currentSpeed) {
    playerAnimate.isMoving = false;

    if (keyIsDown(87)) { // W (Up)
        player.y -= currentSpeed;
        playerAnimate.dir = 3; // Row 4
        playerAnimate.isMoving = true;
    }
    if (keyIsDown(83)) { // S (Down)
        player.y += currentSpeed;
        playerAnimate.dir = 0; // Row 1
        playerAnimate.isMoving = true;
    }
    if (keyIsDown(65)) { // A (Left)
        player.x -= currentSpeed;
        playerAnimate.dir = 2; // Row 3
        playerAnimate.isMoving = true;
    }
    if (keyIsDown(68)) { // D (Right)
        player.x += currentSpeed;
        playerAnimate.dir = 1; // Row 2
        playerAnimate.isMoving = true;
    }
    
    // Constrain player to screen
    player.x = constrain(player.x, 0, width - player.w);
    player.y = constrain(player.y, 0, height - player.h);
    
    if (playerAnimate.isMoving) {
        // Animate only when moving
        if (frameCount % PLAYER_ANIM_SPEED === 0) {
            playerAnimate.frame = (playerAnimate.frame + 1) % 4; // 4 frames per animation
        }
    } else {
        // Reset to idle frame when not moving
        playerAnimate.frame = 0;
    }
}

function drawPlayer() {
    // Calculate the (x, y) coordinate on the spritesheet
    let sx = playerAnimate.frame * PLAYER_FRAME_WIDTH;
    let sy = playerAnimate.dir * PLAYER_FRAME_HEIGHT;
    
    push();
    tint(255, 35);
    image(shadowImg, player.x - 10, player.y + player.h - 28, player.h / 2 + 20, player.w / 2 + 10)
    pop();

    image(playerImg, player.x, player.y, player.w, player.h, sx, sy, PLAYER_FRAME_WIDTH, PLAYER_FRAME_HEIGHT);
    //rect(player.x, player.y, player.w, player.h); //debug
}

function triggerFade(targetScene, duration = 1000, delay = 0, fadeOut = true) {
    if (isFading) return; // Don't start a new fade if one is active
    
    isFading = true;
    isFadeOut = fadeOut;
    fadeStartTime = millis();
    fadeDuration = duration;
    fadeDelay = delay;
    fadeTargetScene = targetScene;
}

function drawFade() {
    if (!isFading) return;

    let now = millis();
    let delayElapsed = now - fadeStartTime;

    // Wait for the delay to finish
    if (delayElapsed < fadeDelay) {
        return; // Still in the delay period, do nothing
    }

    // Calculate progress after the delay
    let fadeElapsed = delayElapsed - fadeDelay;
    let fadeProgress = constrain(fadeElapsed / fadeDuration, 0, 1);
    
    let alpha;
    if (isFadeOut) {
        alpha = fadeProgress * 255; // Fades to black
    } else {
        alpha = (1.0 - fadeProgress) * 255; // Fades from black
    }

    //black overlay
    push();
    fill(0, 0, 0, alpha);
    rectMode(CORNER);
    rect(0, 0, width, height);
    pop();

    if (fadeProgress >= 1.0) {
        // Fade complete
        isFading = false;
        if (isFadeOut) {
            switchToScene(fadeTargetScene);
        }
    }
}

function drawUIButtons() {
    // Reset camera to draw a 2D overlay, important for WEBGL mode
    if (p5.instance && p5.instance._renderer.isP3D) {
        camera();
        ortho();
    }

    push();
    rectMode(CORNER);
    textAlign(CENTER, CENTER);
    textSize(16);

    // --- Main Controls Button ---
    controlsButton.x = width - controlsButton.w - controlsButton.padding;
    controlsButton.y = controlsButton.padding;

    stroke(255);
    strokeWeight(2);
    fill(0, 150);
    rect(controlsButton.x - 5, controlsButton.y - 5, controlsButton.w - 45, controlsButton.h + 15);

    noStroke();
    fill(255);
    let buttonText = controlsEnabled ? 'Game Focus: \nON' : 'Game Focus: \nOFF';
    textAlign(LEFT);
    text(buttonText, controlsButton.x + controlsButton.w / 2 - 90, controlsButton.y + controlsButton.h / 2);

    pop();
}

function setupScrollLock() {
    if (p5Canvas && p5Canvas.elt) {
        p5Canvas.elt.addEventListener('mouseenter', disableScroll);
        p5Canvas.elt.addEventListener('mouseleave', enableScroll);
    }
}

const scrollKeys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 }; // Space, PageUp/Down, End, Home, Arrows

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (scrollKeys[e.keyCode]) {
        preventDefault(e);
    }
}

function disableScroll() {
    if (!controlsEnabled) return; // Do nothing if the user has disabled controls
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function enableScroll() {
    // Always remove listeners when mouse leaves, regardless of user setting
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('keydown', preventDefaultForScrollKeys);
}