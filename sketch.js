var movingRect,fixedRect;
var box1,box2,box3;

function setup() {
  createCanvas(800,400);
 movingRect=createSprite(200,200,80,50);
 fixedRect=createSprite(300,200,80,60);
 movingRect.shapeColor="purple";
 fixedRect.shapeColor="purple";
 box1=createSprite(200,100,30,30);
 box2=createSprite(300,100,30,30);
 box3=createSprite(400,100,30,30);
 box1.shapeColor="purple";
 box2.shapeColor="purple";
 box3.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
movingRect.x=mouseX;
movingRect.y=mouseY;


 if( isTouching(movingRect,box1)){
  movingRect.shapeColor="yellow";
  box1.shapeColor="yellow";
 }
else{
  movingRect.shapeColor="purple";
  box1.shapeColor="purple";
}


  drawSprites();
}

