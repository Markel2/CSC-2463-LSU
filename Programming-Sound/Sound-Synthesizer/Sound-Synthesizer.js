let synth = new Tone.MetalSynth(Tone.Synth);
let bend = new Tone.PitchShift();


bend.pitch = 0;
synth.harmonicity = 18.6;
synth.resonance = 10;
synth.modulationIndex = 31;
synth.connect(bend);
bend.toDestination();


function setup() {
  createCanvas(400, 400);

pitchSlider = createSlider(-12, 12, 0, 0.1); //pitch down -12, pitch up 12, starting point is 0
pitchSlider.position (120, 200);
pitchSlider.mouseMoved(()=> bend.pitch = pitchSlider.value());
  
}

let notes = {
  'q' : 'C4',
  'w' : 'D4',
  'e' : 'E4',
  'r' : 'F4',
  't' : 'G4',
  'y' : 'A4',
  'u' : 'B4',
  'i' : 'C5'
}

function keyPressed(){
  if(keyIsPressed && key == 'q' || 'w' || 'e' || 'r' || 't' || 'y' || 'u' || 'i') {
    let playNotes = notes[key];
    synth.triggerAttack(playNotes);
  }
}

function keyReleased(){
  let playNotes = notes[key];
  synth.triggerRelease(playNotes,'+0.03');
}


function draw() {
  background(220);
  text('play Q-I for synth', 140, 120);
  text('Pitch Slider', 150, 190);
  
}