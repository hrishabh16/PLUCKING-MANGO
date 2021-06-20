const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var stone1;
var launcher;
var bgImage,background1;

function preload(){
	boy=loadImage("images/boy1.png");
  bgImage = loadImage("images/bg.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  
  

	Engine.run(engine);
  mango1=new mango(1100,100,30);
  mango2 = new mango(1100,200,30);
mango3 = new mango(1000,200,30);
mango4 = new mango(1000,100,30);
mango5 = new mango(950,200,30);
mango6 = new mango(1150,100,30);
mango7 = new mango(1200,200,30);
mango8 = new mango(1150,250,30);
mango9 = new mango(1150,150,30);
mango10 = new mango(950,250,30);
treeObj=new tree(1050,580);
groundObject = new ground(width/2,600,width,20);
stone1 = new stone(350,400,30);
launcher = new Launcher(stone1.body,{x:410,y:430});
}

function draw() {
  
  background(bgImage);
  
  //Add code for displaying text here!
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get another stone to Play!!",50 ,50);

  image(boy ,300,340,300,300);
  
   detectcollision(stone1,mango1);
   detectcollision(stone1,mango2);
   detectcollision(stone1,mango3);
   detectcollision(stone1,mango4);
   detectcollision(stone1,mango5);
   detectcollision(stone1,mango6);
   detectcollision(stone1,mango7);
   detectcollision(stone1,mango8);
   detectcollision(stone1,mango9);
   detectcollision(stone1,mango10);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone1.display();
  groundObject.display();
  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
    
    Matter.Body.setPosition(stone1.body,{x:410,y:430});
    launcher.attach(stone1.body);
  }
}
function detectcollision(Lstone,Lmango){
   mangoBodyPosition = Lmango.body.position;
   stoneBodyPosition = Lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=Lmango.r + Lstone.r){
     Matter.Body.setStatic(Lmango.body,false);
   }
}

