let player = new Tone.Player("https://markel2.github.io/CSC-2463-LSU/Programming-Sound/Sound-Effects/Paintbrush.mp3").toDestination();
player.loop = true;
player.playbackRate = 1;
player.reverse = true;


function mousePressed (){
  player.start();
}

function mouseReleased (){
  player.stop();
}


function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(250, 200, 100);
  text ('Hold mouse down for loop', width/4, height/4)
}
  