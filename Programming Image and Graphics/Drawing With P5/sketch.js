function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill('darkblue');
  square(100, 100, 200);
  stroke('white');
  strokeWeight(2);
  fill('brown');
  circle(202.5, 200, 100);
  stroke('white');
  strokeWeight(2);
  fill('red');
  translate(width/2, height/2);
  for (let i = 0; i < 5; i++) {
    push();
    rotate(45*i);
    triangle(202.5, 149, 177.5, 225, 227.5, 225);
    rotate(-45*i);
    pop();
  }
  
}
