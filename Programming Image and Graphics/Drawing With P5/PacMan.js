function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill('black');
  rect(100, 100, 200, 100);
  fill('yellow');
  arc(150, 150, 80, 80, PI + QUARTER_PI, PI - QUARTER_PI);
  fill('red')
  arc(250, 150, 80, 80, PI, 0);
  rect(210.03, 145, 79.895, 45);
  fill('white')
  circle(230, 150, 25);
  circle(270, 150, 25);
  fill('blue')
  circle(230, 150, 15);
  circle(270, 150, 15);
}
