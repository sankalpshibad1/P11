var runner, runnerImg;
var path, pathImg;

function preload(){
  //pre-load images
runnerImg = loadImage("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,1000);

  //create sprites here

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  

  runner = createSprite(300,300,40,40);
  runner.addImage(runnerImg);
  runner.scale = 0.1;

  invisibleGround1 = createSprite(50,50,20,400);
  invisibleGround2 = createSprite(350,350,20,400);
  invisibleGround1.visible = false;
  invisibleGround2.visible = false;

}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

 runner.collide(invisibleGround1,invisibleGround2);


function mousePressed(){
  runner.velocityX = 5;
}

drawSprites();

}