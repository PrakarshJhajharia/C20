var frect, mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  frect.shapeColor = "red"
  frect.debug = true
  mrect = createSprite(200, 200, 50, 50);
  mrect.shapeColor = "yellow"
  mrect.debug = true
  mrect.velocityX = 2
}

function draw() {
  //mrect.x = World.mouseX;
  //mrect.y = World.mouseY;
  background(55,45,250); 
  
  
  if(frect.x - mrect.x < frect.width/2 + mrect.width/2
    && mrect.x - frect.x < frect.width/2 + mrect.width/2
  
    ){
    frect.shapeColor = "green"
    mrect.shapeColor = "green"
    mrect.velocityX = mrect.velocityX * (-1)
  } 
  else{
    mrect.shapeColor = "yellow"
    frect.shapeColor = "red"
  }
  drawSprites();
}