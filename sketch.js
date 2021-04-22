
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p1,d1,d2,d3,g1;

function preload()
{
	
}

function setup() {
	createCanvas(900, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	p1 = new Paper(200,100,10);
	d1 = new Dustbin(700,272,200,15);
	d2 = new Dustbin(607,230,15,100);
	d3 = new Dustbin(793,230,15,100);
    g1 = new Ground(450,290,900,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  p1.display();
  d1.display();
  d2.display();
  d3.display();
  g1.display();
 
}

function keyPressed(){
	if(keyCode==="UP_ARROW"){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:85,y:-85});
	}
}
