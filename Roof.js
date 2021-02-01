class Roof{
constructor(x,y,width,height){
var options = {
isStatic: true
}

this.body = Bodies.rectangle(x,y,width,height,options)
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world, this.body);

}

display(){
var posA = this.body.position
push()
translate(posA.x, posA.y)
fill("grey");
rect(0,0,this.width,this.height);
pop();



}
}