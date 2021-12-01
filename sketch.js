var ball;
function setup() {
  createCanvas(700,700);
  ball = createSprite(350,350,100,100);
}

function draw() 
{
  background(30);
  if(keyDown("left")){
    ball.x = ball.x - 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x + 10
  }
  if(keyDown("up")){
    ball.y = ball.y - 10
  }
  if(keyDown("down")){
    ball.y = ball.y + 10
  }
drawSprites()
}




