let mySound;

function preload() {
  mySound = loadSound('redzone.mp3');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(random(255));
mySound.play();
}

