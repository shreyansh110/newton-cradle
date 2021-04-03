const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint;

var handle,bob1,bob2,bob3,bob4,bob5,BallDiameter;

function preload(){

}

function setup (){
createCanvas(1000,600)

  engine=Engine.create();
  world=engine.world;

 handle=new Support(460,130,250,30);
 bob1=new Ball(558,350,21);
 bob2=new Ball(515,350,21);
 bob3=new Ball(472,350,21);
 bob4=new Ball(430,350,21);
 bob5=new Ball(387,350,21);

string1=new Chain(bob1.body,handle.body,92,0);
string2=new Chain(bob2.body,handle.body,50,0);
string3=new Chain(bob3.body,handle.body,10,0);
string4=new Chain(bob4.body,handle.body,-30,0);
string5=new Chain(bob5.body,handle.body,-75,0);
Engine.run(engine)
}


function draw(){
Engine.update(engine)
rectMode(CENTER)
background(225);
handle.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

drawSprites();
}
function keyPressed(){
  if(keyCode===32){
  
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:380,y:0})
  }
  }


