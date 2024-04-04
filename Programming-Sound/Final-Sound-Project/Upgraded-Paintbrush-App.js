let colorPalette; let eraseButton; let backgroundmusic; let paintbrush;
let sequence1, square, melody;

function preload() {
  backgroundmusic =  new Tone.Player("https://markel2.github.io/CSC-2463-LSU/Programming-Sound/Sound-Effects/relaxingmusic.mp3").toDestination();
  paintbrush = new Tone.Player("https://markel2.github.io/CSC-2463-LSU/Programming-Sound/Sound-Effects/Paintbrush.mp3").toDestination();
  backgroundmusic.loop = true;
  backgroundmusic.playbackRate = 20;
  paintbrush.loop = true;
  paintbrush.playbackRate = 1;
  paintbrush.reverse = true; 
  backgroundmusic.autostart = true;
  melody = ["A5", ["E4", "G5", "D4", "C4"], "C3"];
  square = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope : {
    attack: 0.75,
    decay: 0.5,
    sustain: 0.25,
    release: 0.25
  }
}).toDestination();

  sequence1 = new Tone.Sequence (function (time,note){
    square.triggerAttackRelease(note, 0.5); 
  }, melody, "7n"); 

  Tone.Transport.start(); 
  Tone.Transport.bpm.value = 250; 
  Tone.Transport.timeSignature = [3,4]; 

}

function setup() {
  createCanvas(1200, 600);
  background(220);  

  eraseButton = createButton('Eraser');
  colorPalette = [
    new ColorChoice(0, 0, color('red')),
    new ColorChoice(0, 33, color('orange')),
    new ColorChoice(0, 66, color('yellow')),
    new ColorChoice(0, 99, color('green')),
    new ColorChoice(0, 132, color('cyan')),
    new ColorChoice(0, 165, color('blue')),
    new ColorChoice(0, 198, color('magenta')),
    new ColorChoice(0, 231, color('brown')),
    new ColorChoice(0, 264, color('white')),
    new ColorChoice(0, 297, color('black'))
  ];
  
  eraseButton.mousePressed(RestartSketch);
}


function mousePressed() {
  
  for(let i = 0; i , i < colorPalette.length; i++) {
    if(colorPalette[i].contains(mouseX, mouseY) && mouseX > 0
    && mouseX < 30 && mouseY > 0 && mouseY < 330) {
      selectedColor = colorPalette[i].fill;
      }}
    
  
     }
function mouseDragged() {
  if(mouseX > 50 && mouseY > 0) {
    strokeWeight(10);
    stroke(selectedColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}

  

function paintSound() {
  if (mouseDragged) {
    paintbrush.start();
  }
  if(mouseReleased & mouseX > 50 && mouseY > 0) {
    paintbrush.stop();
  }   
}
 
function RestartSketch() {
    sequence1.loop = 1;
    Tone.start();
    sequence1.start();
    clear();
    background(220);
}

function keyPressed() {
    if (key == 'M') {
      backgroundmusic.stop();
    }
}

function draw() {
 
  for(let i =0; i , i < colorPalette.length; i++) {
     colorPalette[i].draw();
  
       
     } 
     
     
   }
   
class ColorChoice {
  constructor(x,y, fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
  draw () {
    fill(this.fill);
    noStroke();
    square(this.x, this.y, 30);}

  contains(x,y) {
    let insideX = x >= this.x && x <= this.x+30;
    let insideY = y >= this.y && y <= this.y+30; 
    return(insideX, insideY); 
  }

}


