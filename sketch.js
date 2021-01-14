var d,e,v;
function preload(){
  d = loadImage("D.png");
  e = loadImage("e.png");
  v = loadImage("v.png");
  
}
function setup() {
  createCanvas(700,400);
  maze = new Maze();

}
function draw() {
  
  background("BLACK");
  maze.display();

}
