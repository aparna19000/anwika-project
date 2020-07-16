const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 635, width, 10, {isStatic:true})
	World.add(world, ground)

	paper = new Paper(200, 200, 50, 50)
	
	dustbin = new Trash(890, 570, 200, 30)
	Engine.run(engine);
}

function draw() {
	background(255);
	Engine.update(engine);

	rectMode(CENTER)
	fill(100)
	rect(width/2, 635, width, 10)
	
	paper.display();
	dustbin.display();
	
}
function keyPressed()
    {
        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(paper.paper, paper.paper.position, {x:75, y:-75})
        }
        if(keyCode === RIGHT_ARROW){
            Matter.Body.applyForce(paper, paper.position, {x: 50, y:0})
        }
        if(keyCode === LEFT_ARROW){
            Matter.Body.applyForce(paper, paper.position, {x:-50, y:0})
        }
        if(keyCode === DOWN_ARROW){
            Matter.Body.applyForce(paper, paper.position, {x:0, y:50})
        }
    }