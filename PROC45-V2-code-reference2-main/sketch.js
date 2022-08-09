var bg,bgImg;
var player, shooterImg, shooter_shooting;
var gunimage
var zomb1;
var zomb2
var gullets
var _gzombie1
var _gzombie2

function preload(){
  
  shooterImg = loadImage("assets/star.gif")
  shooter_shooting = loadImage("assets/jojo-star.gif")
zomb1 = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
 gunimage = loadImage("assets/bullet1.png")
 zomb2 = loadImage("assets/z.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
 

  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 1.0
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 
if (keyDown("space")){
fire()

}
var selectorz = Math.round(random(1, 2))
if (frameCount%100==0){
if (selectorz == 1 ){
  zombie1();
}
else if (selectorz==2){
zombie2();
}

}

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
function fire(){  
  blast = createSprite(player.x,player.y,10,10);
  blast.addImage(gunimage)
blast.velocityX=10.0
blast.scale=0.1
}
function zombie1(){
zom = createSprite(displayWidth,displayHeight-300,10,10);
zom.addImage(zomb1)
zom.velocityX = -3.0
zom.scale=0.1
zom.y = Math.round(random(displayHeight - 250, displayHeight - 480));
}
function zombie2(){
  zom2 = createSprite(displayWidth,displayHeight-300,10,10);
  zom2.addImage(zomb2)
  zom2.velocityX = -3.0
  zom2.scale=0.1
  zom2.y = Math.round(random(displayHeight - 250, displayHeight - 480));  
}
