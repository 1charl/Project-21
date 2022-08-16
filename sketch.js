
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var groundObject
var leftSide
var rightSide
var world
var engine
var wall1
var wall2

function setup() {
	createCanvas(windowWidth-25, windowHeight)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions = {
		restitution: 0.3,
		friction: 0,
		isStatic: false,
		density: 1.2
	}

	ball = Bodies.circle(20,20,20,ballOptions)
	World.add (world,ball)
	Engine.run(engine);
  
	ground = new Ground(windowHeight,windowHeight,windowWidth,20);
	
	wall1 = new Ground(1100,700,20,150)
	wall2 = new Ground(1400,700,20,150)
	
}

function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(ball.position.x,ball.position.y,40,40)

	ground.display();
	wall1.display();
	wall2.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball, ball.position, {x: 100, y:-100})
	}
}

