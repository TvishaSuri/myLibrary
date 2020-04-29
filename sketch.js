var fixedrect, movingrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 50);
  fixedrect.shapeColor="green"
  fixedrect.debug=true
  movingrect=createSprite(100,100,50,100);
  movingrect.shapeColor="green"
  movingrect.debug=true

}

function draw() {
  background(0);  
  if(isTouching (movingrect,fixedrect)) {
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  else {movingrect.shapeColor="green"
fixedrect.shapeColor="green"
}

  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
 
  drawSprites();
}

