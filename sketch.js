
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var groundSprite;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var rope;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	diameter = 70;
	centerBobX = width/2;
	centerBobY = height/2;

	bob1 = new Bob(centerBobX - diameter*2,centerBobY,diameter);
	bob2 = new Bob(centerBobX - diameter,centerBobY,diameter);
	bob3 = new Bob(centerBobX,centerBobY,diameter);
	bob4 = new Bob(centerBobX + diameter,centerBobY,diameter);
	bob5 = new Bob(centerBobX + diameter*2,centerBobY,diameter);

	roof = new Roof(width/2,height/4,600,20);

	rope1 = new Rope(bob1.body, roof.body,-diameter*2,0);
	rope2 = new Rope(bob2.body, roof.body,-diameter,0);
	rope3 = new Rope(bob3.body, roof.body,0,0);
	rope4 = new Rope(bob4.body, roof.body,diameter,0);
	rope5 = new Rope(bob5.body, roof.body,diameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  drawSprites();
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.postion,{x:-100, y:-100})

}





}



