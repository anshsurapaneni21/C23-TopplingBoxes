const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var eng, world;
var ground;

var box1,box2;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    eng = Engine.create();
    world = eng.world;

    box1 = new Box(280,100,50,50);

    box2 = new Box(240,300,50,100);

    ground = new Ground(200,390,400,20);
 

}

function draw(){
    background(0);
    Engine.update(eng);
    box1.display();
    box2.display();
    ground.display();
    
}