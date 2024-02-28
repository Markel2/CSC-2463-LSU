 
let soundFX = new Tone.Players ({
  musicbox: "Programming-Sound/Sound-Effects/Old-Music-Box.mp3",
  firework: "Programming-Sound/Sound-Effects/Firework.mp3", 
  harp: "Programming-Sound/Sound-Effects/Harp.mp3", 
  windowbreak: "Programming-Sound/Sound-Effects/Window-Break.mp3"}).toDestination();

let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let distAmt = new Tone.Distortion (0.5); 

let button1, button2, button3, button4, delaySlider, distortionSlider;

soundFX.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();
   
function setup() {
  createCanvas(400, 400);
  button1 = createButton('Music Box');
  button1.position (85, 150);
  button1.mousePressed (() =>soundFX.player ('musicbox').start());
  button2 = createButton('Firework');
  button2.position (235, 150);
  button2.mousePressed (() =>soundFX.player ('firework').start());
  button3 = createButton('Harp');
  button3.position (85, 210);
  button3.mousePressed (() =>soundFX.player ('harp').start());
  button4 = createButton('Window Break');
  button4.position (235, 210);
  button4.mousePressed (() =>soundFX.player ('windowbreak').start());

  delaySlider = createSlider (0, 1, 0, 0.05);
  delaySlider.position (120, 300);
  delaySlider.mouseMoved (() => delAmt.delayTime.value = delaySlider.value()); 

  distSlider = createSlider (0, 0.9, 0, 0.05);
  distSlider.position (120, 350);
  distSlider.mouseMoved (() => distAmt.distortion = distSlider.value());
  
  
}

 
function draw() {
  background(220, 100, 200);
  textSize(20);
  textAlign(CENTER);
  text('Sound Sampler \n Press any of the 4 sounds \n Use the sliders to delay and/or distort them', 195, 50)
  textSize(10);
  text('Sound Delay Slider', 180, 300);
  text('Sound Distortion Slider', 185, 350);
  
}
