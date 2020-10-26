const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0;

function preload(){
  backgroundImg = loadImage("images/blue.jpg");
  polygon_img=loadImage("images/polygon.png");
  
}
function setup() {
  createCanvas(1535,750);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(550,550,250,10);
  stand2 = new Stand(1000,300,220,10);
 
  //level one
  block1 = new Block(450,525,30,40);
  //console.log(block1);
  block2 = new Block(480,525,30,40);
  block3 = new Block(510,525,30,40);
  block4 = new Block(540,525,30,40);
  block5 = new Block(570,525,30,40);
  block6 = new Block(600,525,30,40);
  block7 = new Block(630,525,30,40);
  //level two
  block8 = new Block(480,485,30,40);
  block9 = new Block(510,485,30,40);
  block10 = new Block(540,485,30,40);
  block11 = new Block(570,485,30,40);
  block12 = new Block(600,485,30,40);
  //level three
  block13 = new Block(510,445,30,40);
  block14 = new Block(540,445,30,40);
  block15 = new Block(570,445,30,40);
  //top
  block16 = new Block(540,405,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(925,275,30,40);
  blocks2 = new Block(955,275,30,40);
  blocks3 = new Block(985,275,30,40);
  blocks4 = new Block(1015,275,30,40);
  blocks5 = new Block(1045,275,30,40);
  //level two
  blocks6 = new Block(955,235,30,40);
  blocks7 = new Block(985,235,30,40);
  blocks8 = new Block(1015,235,30,40);
  //top
  blocks9 = new Block(985,195,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,100,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:200,y:300});

}
function draw() {
  background( backgroundImg); 
  if(backgroundImg)
    background(backgroundImg);
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(30);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",400,80);
  text("SCORE : "+score,1250,50);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",1100 ,520);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
/*async function getBackgroundImage(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11, 13);
   //console.log(hour);

   if (hour >= 06 && hour <= 18) {
     bg = "images/dark.jpg";
   } else {
     bg = "images/blue.jpg";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
}*/