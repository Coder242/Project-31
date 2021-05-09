const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisonHeight = 300;
var ground, divison , particles, plinkos;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-5, 500, 10);

  particles = [];
  plinkos = [];
  divison = [];

  for(var i = 0; i <= width; i = i + 80){
    divison.push(new Divison(i, height-divisonHeight/2, 10, divisonHeight));
  }
  for(var a = 40; a <= width; a = a + 50){
    plinkos.push(new Plinko(a, 75));
  }
  for(var b = 15; b <= width; b = b + 50){
    plinkos.push(new Plinko(b, 175));
  }
  for(var c = 40; c <= width; c = c + 50){
    plinkos.push(new Plinko(c, 275));
  }
  for(var d = 15; d <= width; d = d + 50){
    plinkos.push(new Plinko(d, 375));
  }

  Engine.run(engine);
}

function draw() {
  background(0);

  for(var k = 0; k < divison.length; k++){
    divison[k].display();
  }
  for(var y = 0; y < plinkos.length; y++){
    plinkos[y].display();
  }
  if(frameCount%30 === 0)(
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  )
  for(var z = 0; z < particles.length; z++){
    particles[z].display();
  }

  ground.display();

}