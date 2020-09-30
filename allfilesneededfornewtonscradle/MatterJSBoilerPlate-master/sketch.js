
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var handle;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

handle= new Support(200,200,700,10)

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(225);
  handle.display();
  drawSprites();
 
}



