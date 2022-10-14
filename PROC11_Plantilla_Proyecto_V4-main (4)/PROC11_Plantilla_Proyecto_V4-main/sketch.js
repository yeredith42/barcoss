var sea,seaImg;
var ship,shipImg,ship2,ship3,ship4,ship1,shipp;

function preload(){
  seaImg = loadImage("sea.png");
  ship1 = loadImage("ship-1.png");
  ship2 = loadImage("ship-2.png");
  ship3 = loadImage("ship-3.png");
  ship4 = loadImage("ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(50,100);
  sea.addImage(seaImg);
  sea.scale=0.5;
  ship=createSprite(300,250,2,200);
  ship.addImage(ship1);
  ship.scale=0.2;
  shipp=createSprite(90,250,2,200);
  shipp.addImage(ship2);
  shipp.scale=0.2;
}

function draw() {
  background("blue");
 drawSprites();
}