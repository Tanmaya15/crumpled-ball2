
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var paper;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(10,385,2200,20);
	paper = new Paper(50,350,40);
	dustbin = new Dustbin(650,350);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  fill("black");
  textSize(25);
  text("press up arrow to throw the ball inside the dustbin!",50,50);
  
ground.display();
dustbin.display();
paper.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
	}
}



