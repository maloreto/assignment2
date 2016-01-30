var r;
var g;
var b;
var mouseStrenght;

function setup() {
  createCanvas(500,500);
  r = color(255,0,0);
  g = color(0,127,0);
  b = color(0,0,200);
}

function draw() {
  r++;
  g++;
  b++;

}

function mouseDragged() {
  var mouseStrengh = dist(mouseX, mouseY, pmouseX, pmouseY);
  var strokeStrength = map(mouseStrenght, 0, 100, 0, 20);
  stroke(r%255,g%255,b%255);
  strokeWeight(strokeStrength);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  background(255);
}