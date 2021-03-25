const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine,myworld;
var ground1;
var box1,box2;

function setup(){
  var canvas=createCanvas(400,400);


  myengine = Engine.create();
  myworld = myengine.world;







  box1 = new Box (180,270,50,50)
  box2 = new Box (160,250,50,50)
 ground1 = new Ground (200,390,400,20)


  
}
function draw()
{
  background(0);

  Engine.update(myengine);



  box1.display();
 box2.display();
 ground1.display();
}
