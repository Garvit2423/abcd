var fixedRect, movingRect;
var car,wall


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  car=createSprite(200,150,50,50);
  car.shapeColor="red";
  wall=createSprite(1000,170,50,150);
  wall.shapeColor="blue";
  car.velocityX=4;
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,wall)){
   textSize(30)
   fill("green")
   text("touched",600,600)
   car.velocityX=0
 }
  else{
    
      textSize(30)
      fill("green")
      text("not touched",600,600)
  }
  bounceoff(car,wall)
  drawSprites();
}
function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
 return true

}
else {
 return false
}
}
function bounceoff(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2){
          p1.velocityX=(-1)*p1.velocityX
      }
      else if( p1.y - p2.y < p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 + p1.height/2) {
          p1.velocityY=(-1)*p1.velocityY
}
}