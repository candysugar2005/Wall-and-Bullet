var bullet , wall ;
var speed , weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  
}

function draw() {
  background(0);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  
 

  drawSprites();
}

function hasCollided(bullet2,wall2){
  bulletRightEdge=bullet2.x+bullet2.width;
  wallLeftEdge=wall2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}