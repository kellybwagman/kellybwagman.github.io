var r, g, b, i;
var x, y, z;
var rotationAngle = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  r = 255;
  g = 0;
  b = 255;
  i = 1;
  x = 0;
  y = 0;
  z = 0;
  frameRate(30);
}

function draw() {
  lights();
  
  if (mouseIsPressed == true) {
    x = (-width/2) + pmouseX;
    y = (-height/2) + pmouseY;
  }
  
  translate(x, y, z);
  
  //rotateX(rotationAngle);
  //rotateY(rotationAngle);
  //rotateZ(rotationAngle);
  //rotationAngle = rotationAngle + 0.02;
  fill(r, g, b);
  
  //translate(100*accelerationX, 100*accelerationY, 100*accelerationZ);
  rotateX(accelerationX * 0.02);
  rotateY(accelerationY * 0.02);
  
  box(100, 100, 100);
  
  //x = x + random(-0.2, 0.2);
  //y = y + random(-0.2, 0.2);
  //z = z + random(-0.2, 0.2);
  
  if (i % 40 == 0) {
    r = int(random(255));
    g = int(random(255));
    b = int(random(255));
  }
  
  i++;
  
}