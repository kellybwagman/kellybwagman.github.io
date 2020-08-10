var r, g, b, i;
var x, y, z;
var rotationAngle = 0.0;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(255);
  r = 255;
  g = 0;
  b = 255;
  i = 1;
  x = width/2;
  y = height/2;
  z = 0;
  frameRate(30);
}

function draw() {
  lights();
  
  if (mouseIsPressed == true) {
    x = mouseX;
    y = mouseY;
  }
  
  translate(x, y, z);
  rotateX(rotationAngle);
  rotateY(rotationAngle);
  rotateZ(rotationAngle);
  rotationAngle = rotationAngle + 0.02;
  fill(r, g, b);

  translate(100*accelerationX, 100*accelerationY, 100*accelerationZ)

  box(100);
  
  x = x + random(-0.2, 0.2);
  y = y + random(-0.2, 0.2);
  z = z + random(-0.2, 0.2);
  
  if (i % 20 == 0) {
    r = int(random(255));
    g = int(random(255));
    b = int(random(255));
  }
  
  i++;
}
