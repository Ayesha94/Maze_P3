function preload()
{
  rightImg=loadImage("right2.png")
  
  wonImg=loadImage("won2.png")
  wonImg2=loadImage("trophy1.png")
  trophyImg=loadImage("trophy.png")
}

function setup() {
  createCanvas(400,400);
  
  cd1=createSprite(50, 50, 10, 100);
  cd1.shapeColor="yellow";
  cd2=createSprite(50, 300, 10, 100);
  cd2.shapeColor="yellow";
  cd3=createSprite(70, 100, 50, 10);
  cd3.shapeColor="yellow";
  cd4=createSprite(100, 20, 10, 80);
  cd4.shapeColor="yellow"
  cd5=createSprite(20, 140, 50, 10);
  cd5.shapeColor="yellow"
  cd6=createSprite(50, 170, 10, 80);
  cd6.shapeColor="yellow"
  cd7=createSprite(70, 210, 50, 10);
  cd7.shapeColor="yellow"
  cd8=createSprite(90, 240, 10, 60);
  cd8.shapeColor="yellow"
  cd9=createSprite(70, 345, 50, 10);
  cd9.shapeColor="yellow"
  cd10=createSprite(200, 50, 100, 10);
  cd10.shapeColor="yellow"
  cd11=createSprite(250, 25, 10, 60);
  cd11.shapeColor="yellow"
  cd12=createSprite(150, 100, 10, 110);
  cd12.shapeColor="yellow"
  cd13=createSprite(180, 150, 70, 10);
  cd13.shapeColor="yellow"
  cd14=createSprite(350, 250, 10, 200);
  cd14.shapeColor="yellow"
  cd15=createSprite(300, 250, 10, 80);
  cd15.shapeColor="yellow"
  cd16=createSprite(200, 250, 100, 10);
  cd16.shapeColor="yellow"
  cd17=createSprite(245, 330, 10, 130);
  cd17.shapeColor="yellow"  
  cd18=createSprite(170, 310, 140, 10);
  cd18.shapeColor="yellow"
  cd19=createSprite(280, 210, 55, 10);
  cd19.shapeColor="yellow"
  cd20=createSprite(220, 157, 10, 25);
  cd20.shapeColor="yellow"
  cd21=createSprite(330, 345, 100, 10);
  cd21.shapeColor="yellow"
  cd22=createSprite(150, 250, 10, 80);
  cd22.shapeColor="yellow"
  cd23=createSprite(220, 100, 150, 10);
  cd23.shapeColor="yellow"
  cd24=createSprite(300, 100, 10, 100);
  cd24.shapeColor="yellow"
  cd25=createSprite(320, 50, 50, 10);
  cd25.shapeColor="yellow"
  cd26=createSprite(350, 70, 10, 50);
  cd26.shapeColor="yellow"

  cardboard=createGroup();
 cardboard.add(cd1);
 cardboard.add(cd2);
 cardboard.add(cd3);
 cardboard.add(cd4);
 cardboard.add(cd5);
 cardboard.add(cd6);
 cardboard.add(cd7);
 cardboard.add(cd8);
 cardboard.add(cd9);
 cardboard.add(cd10);
 cardboard.add(cd11);
 cardboard.add(cd12);
 cardboard.add(cd13);
 cardboard.add(cd14);
 cardboard.add(cd15);
 cardboard.add(cd16);
 cardboard.add(cd17);
 cardboard.add(cd18);
 cardboard.add(cd19);
 cardboard.add(cd20);
 cardboard.add(cd21);
 cardboard.add(cd22);
 cardboard.add(cd23);
 cardboard.add(cd24);
 cardboard.add(cd25);
 cardboard.add(cd26);
  wallGroup=createGroup();
 leftWall=createSprite(0, height/2, 10, height);
 leftWall.shapeColor="yellow"

 rightWall=createSprite(width, height/2, 10, height);
 rightWall.shapeColor="yellow"

 topWall=createSprite(width/2, 0, width, 10);
 topWall.shapeColor="yellow"

 bottomWall=createSprite(width/2, height, width, 10);
 bottomWall.shapeColor="yellow"

 wallGroup.add(leftWall);
 wallGroup.add(rightWall);
 wallGroup.add(topWall);
 wallGroup.add(bottomWall);

 dora=createSprite(30, 370)
 dora.addImage(rightImg);
 dora.scale=0.01

 trophy=createSprite(370, 370)
 trophy.addImage(trophyImg)
 trophy.scale=0.05
 //dora.debug=true
 flag=0
}

function draw() {
  background(0);  
  drawSprites();
  dora.velocityX=0
  dora.velocityY=0
  if(keyDown("left")&&flag==0)
  dora.velocityX=-2

  if(keyDown("right")&&flag==0)
  dora.velocityX=2

  if(keyDown("up")&&flag==0)
  dora.velocityY=-2

  if(keyDown("down")&&flag==0)
  dora.velocityY=2

  if(cardboard.isTouching(dora) || wallGroup.isTouching(dora))
  {
    dora.x=20
    dora.y=370
  }

  if(dora.collide(trophy))
  {
    cardboard.destroyEach();
    dora.addImage(wonImg);
    dora.scale=0.1
    dora.x=width/2
    dora.y=height/2-40
    var won=createSprite(width/2, height-80)
    won.addImage(wonImg2)
    won.scale=0.3
    flag=1;
    trophy.visible=false
  }

}