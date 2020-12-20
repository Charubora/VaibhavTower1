const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var polygen ; 
var surface;

function preload (){

}
 
function setup (){
var canvas = createCanvas (1200,400)
engine = Engine.create();
world = engine.world;
Engine.run(engine);

//world = engine.world;

ground1 = new Ground(500,357,111,10);
ground2 = new Ground(867,357,111,10);
ground3 = new Ground(658,357,111,10);


}
function draw (){
background("black")
Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();


}








