const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var platform, platform2;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(390, 300, 250, 10);
    platform2 = new Ground(700, 200, 200, 10);

    boxs1 = new Box(300,275,30,40);
    boxs2 = new Box(330,275,30,40);
    boxs3 = new Box(360,275,30,40);
    boxs4 = new Box(390,275,30,40);
    
    
    boxs5 = new Box(420,275,30,40);
    boxs6 = new Box(450,275,30,40);
    boxs7 = new Box(480,275,30,40);

    boxs8 = new Box(330,235,30,40);
    boxs9 = new Box(360,235,30,40);
    boxs10 = new Box(390,235,30,40);
    boxs11= new Box(420,235,30,40);
    boxs12 = new Box(450,235,30,40);

    boxs13 = new Box(360,195,30,40);
    boxs14 = new Box(390,195,30,40);
    boxs15 = new Box(420,195,30,40);
    boxs16 = new Box(450,155,30,40);

    bird = new Bird(100,100);
    box1 = new Box(640,175,30,40);
    box2 = new Box(670,175,30,40);
    box3 = new Box(700,175,30,40);
    box4 = new Box(730,175,30,40);
    
    
    box5 = new Box(760,175,30,40);
    box6 = new Box(670,135,30,40);
    box7 = new Box(700,135,30,40);

    box8 = new Box(730,135,30,40);
    box9 = new Box(700,95,30,40);

    chain = new Chain(bird.body,{ x:100, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs4.display();
    boxs5.display();
    boxs6.display();
    boxs7.display();
    boxs8.display();
    boxs9.display();
    boxs10.display();
    boxs11.display();
    boxs12.display();
    boxs13.display();
    boxs14.display();
    boxs15.display();
    boxs16.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();
    bird.display();
    platform.display();
    platform2.display();
    chain.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode === 32){
        chain.attach(bird.body);
    }
}
