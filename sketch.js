let img;


function setup() {
  createCanvas(400, 400);
  img = loadImage("https://markel2.github.io/CSC-2463-LSU/assets/cat.webp");
}

function draw() {
  background(220);
  image(img, 0, 0);
}
