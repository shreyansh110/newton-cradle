class Ball{
constructor(x,y,radius){

var options={
'restitution':0.8,
'friction':1,
'density':4,
isStatic:false

}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world,this.body);
BallDiameter=22
}

display(){
 var pis=this.body.position

 push();
 translate(pis.x,pis.y)
ellipseMode(RADIUS);
fill(15,101,217)
circle(0,0,this.radius)
pop();

}




















}