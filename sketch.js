const Engine = Matter.Engine;
const World = Matter.World;
 //const world = Matter.world;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var score=0;
var BackGroundImage;
var bg="bg1.jpg"

function preload(){

  this.back=loadImage("back.jpg");
  GetBackGroundImage();
}


function setup() {
  createCanvas(1200, 600);
  


	engine = Engine.create();
	world = engine.world;
  ball=new Ball(100,100,40);

  bg1=new Ground(800,450,300,10);

  //ROW1
  block1=new bl(710,410,30,40);
  block2=new bl(740,410,30,40);
  block3=new bl (770,410,30,40);
  block4=new bl (800,410,30,40);
  block5=new bl(830,410,30,40);
  block6=new bl(865,410,30,40);

  //ROW2
  block7=new pink(735,377,30,40);
  block8=new pink(765,377,30,40);
  block9=new pink(795,377,30,40);
  block10=new pink(825,377,30,40);
  block11=new pink(855,377,30,40);

  //ROW3
  block12=new blue(760,350,30,40);
  block13=new blue(790,350,30,40);
  block14=new blue(820,350,30,40);


  block16=new bl(890,410,30,40)

  //ROW TOP
   block15=new green(790,290,30,40);

   sling1 =new slingshot(ball.body,{x:200,y:250})



	Engine.run(engine);
  
}


function draw() {
  // if(BackGroundImage){
  //   background(BackGroundImage);
  background(this.back);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);

  fill("white");
  text("SCORE : "+score,750,40)

 
  
  ball.display();

  bg1.display();

  block1.display();

  block1.score();

  block2.display();

  block2.score();


  block3.display();

  block3.score();
 
  block4.display();
 
  block4.score();
 
  block5.display();
 
  block5.score();
 
  block6.display();
 
  block6.score();
 
  block7.display();

  block7.score();
 
  block8.display();

  block8.score();
 
 block9.display();

 block9.score();
 
  block10.display();

  block10.score();
 
  block11.display();

  block11.score();
 
  block12.display();

  block12.score();
 
  block13.display();

  block13.score();
 
  block14.display();

  block14.score();
 
  block16.display();

  block16.score();
 
  block15.display();

  block15.score();

  sling1.display();

  //keyPressed();

  drawSprites ();
  }



function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if(keyCode===32){
    sling1.attach(ball.body);
  }
}

async function  GetBackGroundImage(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")   
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime
  var hour=datetime.slice(11,13)
  if(hour>=06&&hour<=18){
      bg="sprites/bg2.png"

  } else{
      bg="sprites/bg1.jpg"
  }
  BackGroundImage=loadImage(bg)
}
