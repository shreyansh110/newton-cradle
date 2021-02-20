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

 handle=new Support(460,130,220,10);
 bob1=new Ball(550,350,21);
 bob2=new Ball(508,350,21);
 bob3=new Ball(466,350,21);
 bob4=new Ball(424,350,21);
 bob5=new Ball(382,350,21);

string=new Chain(handle.body,bob1.body,BallDiameter*2,0)
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
string.display();
drawSprites();




}