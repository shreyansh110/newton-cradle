class Ball{
constructor(x,y,radius){

var options={
'restitution':5,
'friction':4,
'density':7,
isStatic:true

}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world,this.body);


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