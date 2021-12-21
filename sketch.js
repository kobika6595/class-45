var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blast_Img;
var board_img
var bg_img
var coin1 , coin2;
var rules;
function preload() {
  backgroundImage = loadImage("./assets/bg.jpeg");
 // bg_img= loadImage("./assets/f1.jpeg");
  board_img=loadImage( "./assets/board.png")
  coin1=loadImage("./assets/c1.png")
  coin2=loadImage("./assets/c2.png")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    rules.hide()
    game.play();
    
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
 }

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}
