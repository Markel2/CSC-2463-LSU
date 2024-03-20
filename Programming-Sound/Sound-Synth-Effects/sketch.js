let fmSynth = new Tone.FMSynth().toDestination();
fmSynth.type = 'sine'
fmSynth.frequency.value = 55;
fmSynth.harmonicity.value = 70; // harmonicity and modulation index are both interesting numbers to change
fmSynth.modulationIndex = 150.5;
fmSynth.modulationEnvelope = {
  attack: 0.5,
  decay: 0.25,
  sustain: 0.75,
  release: 0.5,
}

function preload(){
  megaman = loadImage('assets/Megaman.png')
}

function setup() {
  createCanvas(1200, 700); 
}

function draw() {
  if (mouseIsPressed === true){
    background(megaman);
  } else if (mouseIsPressed === false){
    background (240);
    text ('press mouse', 150, height/3);
  }
}

function mousePressed() { 
  fmSynth.triggerAttackRelease("a7", 0.5);
}




