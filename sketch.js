const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var hexegon,ground1,ground2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,
block26,block27,hexegon;



function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,275,300,10);
    ground2  = new Ground(825,200,300, 10);
    block1 = new Block(282,265);
    block2 = new Block(310,265);
    block3 = new Block(340,265);
    block4 = new Block(370,265);
    block5 = new Block(400,265);
    block6 = new Block(430,265);
    block7 = new Block(460,265);
    block8 = new Block(490,265);
    block9 = new Block(520,265);
    block10 = new Block(310,225);
    block11 = new Block(340,225);
    block12 = new Block(370,225);
    block13 = new Block(400,225);
    block14 = new Block(430,225);
    block15 = new Block(460,225);
    block16 = new Block(490,225);
    block17 = new Block(340,145);
    block18 = new Block(370,145);
    block19 = new Block(400,145);
    block20 = new Block(430,145);
    block21 = new Block(460,145);
    block22 = new Block(780,175);
    block23 = new Block(810,175);
    block24 = new Block(840,175);
    block25 = new Block(870,175);
    block26 = new Block(810,145);
    block27 = new Block(840,145);
    hexegon = new Bird(100,200);

    
}

function draw(){
Engine.update(engine);
background("black");
    

ground.display();
ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
hexegon.display();



    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        
    //}
}
/*platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
     Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});*/