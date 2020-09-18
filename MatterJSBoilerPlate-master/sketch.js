
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 //creates the tree
	 tree = new Tree (700,370,300,500);

	 //creates the boy
	 boy = new Boy (100,520,100,225);

	 //creates the stone
	stone = new Stone (100,530,30);

	 //creates the ground
	 ground = new Ground (200,600,1200,20);

	 //creates the mangoes

	 mango1 = new Mango (700,250,50,50);
	 mango2 = new Mango (600,300,50,50);
	 mango3 = new Mango (650,200,50,50);
	 mango4 = new Mango (750,210,50,50);
	 mango5 = new Mango (800,250,50,50);

	 //creates the elastic
	 elastic = new Elastic (stone.body,{x:50,y:400});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  //displays the ground
  ground.display();

  //displays the tree
  tree.display();

  //displays the stone
  stone.display();

  //displays the boy
  boy.display();

  //displays the mangoes
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //displays the constraint
  elastic.display();

  //calls the detectCollision functions
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	elastic.fly();
}

function detectCollision(body1,body2){
	stoneBodyPosition = body1.body.position;
	mangoBodyPosition = body2.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=body2.y+body1.y){
		Matter.Body.setStatic(body2.body,false);
	}
	//console.log(distance);
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:50,y:400});
		elastic.attach(stone.body);
	}
}

