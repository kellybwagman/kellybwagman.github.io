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
  angleMode(DEGREES);
  detailX = 3;
  detailY = 3;
  radius = 30 * 2;
  tubeRadius = (radius/3) * 2;
  inhale = true;
}

function draw() {
  //background(255);
  //lights();
  //ambientMaterial(250);
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(100);
  pointLight(255, 255, 255, locX, locY, 100);
  fill(r, g, b)
  
  if (mouseIsPressed == true) {
    x = (-width/2) + pmouseX;
    y = (-height/2) + pmouseY;
  }
  
  translate(x, y, z);
  
  rotateX(rotationAngle);
  rotateY(rotationAngle);
  rotateZ(rotationAngle);
  rotationAngle = rotationAngle + 0.3;
  //fill(r, g, b);
  
  if (i % 2 == 0) {
    if (accelerationX - pAccelerationX > 1.5)
    {
      x = x + (0.5*accelerationX);
      //y = y + (1*accelerationY);
      //z = z + (10*accelerationZ);
      translate(x, y, z);    
    }  
  }
  /*
  if (rotationZ - pRotationZ > 5)
  {
    rotateZ(degrees(rotationZ));
  }
  
  if (rotationX - pRotationX > 5)
  {
    rotateX(degrees(rotationX));
  }
  
  if (rotationY - pRotationY > 5)
  {
    rotateY(degrees(rotationY));
  }
  */
  if (i % 40 == 0) {
    detailXChange = random([-1, 1]);
    detailYChange = random([-1, 1]);

    detailX = detailX + detailXChange;
    if (detailX > 24)
    {
      detailX = 24;
    }

    if (detailX < 3)
    {
      detailX = 3;
    }

    detailY = detailY + detailYChange;
    if (detailY > 16)
    {
      detailY = 16;
    }

    if (detailY < 3)
    {
      detailY = 3;
    }
  }
  
  /*if (i % 15 == 0) {
    radiusChange = random(-1, 1);
    tubeRadiusChange = random(-3, 3);
    
    radius = radius + radiusChange;
    tubeRadius = tubeRadius + tubeRadiusChange;
    
    if (tubeRadius < 3)
    {
      tubeRadius = 3;
    }
  }*/
    
  if (inhale && tubeRadius < radius)
  {
    tubeRadius = tubeRadius + 0.25;
  }
  else
  {
    inhale = false;
  }
  
  if (inhale == false && tubeRadius > 3)
  {
    tubeRadius = tubeRadius - 0.25;
  }
  else
  {
    inhale = true;
   }
  
  torus(radius, tubeRadius, 20, 28);
  
  //beginShape();
  //vertex(100, 23, -100);
  //vertex(200,23,-50);
  //vertex(150, 45,-100);
  //endShape();
  
  //x = x + random(-0.2, 0.2);
  //y = y + random(-0.2, 0.2);
  //z = z + random(-0.2, 0.2);
  
  if (i % 40 == 0) {
    r = int(random(170, 255));
    g = int(random(170, 255));
    b = int(random(170, 255));
  }
  
  i++;
  
}