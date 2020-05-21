var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var movingRect,fixedRect,options
var packageBody,ground,lhelicopter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	 options = {
		'restitution':0.5,
		'friction':1.0,
		'density':5.0
	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
      ground.shapeColor = color("brown")
      ground.density = 2.0;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	helicopterSprite.display()
	packageSprite.display()
	bouncy()
    keyPressed()
	console.log(helicopterSprite)
	packageBody.position.x = helicopterSprite.position.x 
	packageSprite.y = packageBody.position.y;
	packageSprite.x = packageBody.position.x;
	
  drawSprites();
 
}

function keyPressed() {
		if (keyCode === DOWN_ARROW) {
		//    Matter.Body.setStatic(packageBody,false);
		//    Matter.Body.setStatic(helicopterBody,false); 
		   helicopterSprite.position.y = helicopterSprite.position.y + 5
		   packageSprite.restitution =0.5
		   
		   
		 }
	   
		 if (keyCode === UP_ARROW) {
		//    Matter.Body.setStatic(packageBody,false);
		//    Matter.Body.setStatic(helicopterBody,false); 
		   helicopterSprite.position.y = helicopterSprite.position.y -5;
		 }
	   
		 if (keyCode === RIGHT_ARROW) {
			// Matter.Body.setStatic(packageBody,false);
			// Matter.Body.setStatic(helicopterBody,false); 
			helicopterSprite.position.x = helicopterSprite.position.x + 5;
		  }
		
		 if (keyCode === LEFT_ARROW) { 
		//    Matter.Body.setStatic(packageBody,false);
		 
		   helicopterSprite.position.x = helicopterSprite.position.x - 5;
		 }
	   }
	   
// function heli (){
// 	if(helicopterSprite.x - (packageSprite.x <= helicopterSprite.x + packageSprite.x)/2){

// 	}
// }

function bouncy(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
		packageBody.velocityY = 5;
	}
}
