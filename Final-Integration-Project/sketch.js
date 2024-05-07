let images, imagekeys, imagePull, randImageKey, keyString;
let GameState, startTime, timeLimit = 60;
let port, connectButton;  

function setup() {
  port = createSerial();
  createCanvas(1200, 600); 
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
  let usedPorts = usedSerialPorts();
  if (usedPorts.length > 0) {
    port.open(usedPorts[0], 57600);
  }
  frameRate(20);
  images = {
    cat: "https://markel2.github.io/CSC-2463-LSU/Final-Integration-Project/assets/cat.webp", 
    school: "https://markel2.github.io/CSC-2463-LSU/Final-Integration-Project/assets/School.jpg",
    apple: "https://markel2.github.io/CSC-2463-LSU/Final-Integration-Project/assets/apple.png"
    
  };
  imagekeys = Object.keys(images);
  randImageKey = imagekeys[Math.floor(Math.random() * imagekeys.length)];
  imagePull = images.randImageKey;
  showImage = loadImage(imagePull); 
  currentState = "Start";
  startTime = millis();
}
  
  

function draw() {
  background(220);
  

  if(currentState === "Start") {
    startGame();
  }
  else if(currentState === "Play") {
    playGame();
  }
  else if(currentState === "End") {
    endGame();
  }

  }

function imageDisplay(showImage) {
  showImage.resize(300, 300);
  imageMode(CENTER);
  tint(255, map(elapsedTime, 0, 300000, 0, 255));
  image(showImage, width/2, height/3);
  elapsedTime = millis() - startTime;
}

function startGame() {
  strokeWeight(5);
  fill('lightgreen');
  rect(300, 150, width/2, height/2);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(12);
  strokeWeight(5);
  text("Welcome to the Guess the Picture game. \n Your objective is simple:" +
      "guess the picture! \n Your score will be based on how fast your guess is.\n" + 
      "Guesses are not case senstive. GOOD LUCK!", width/2, height/2.5);
}

function playGame() {
  
  imageDisplay(showImage);
  textAlign(RIGHT, TOP);
  timeLimit -= 1/60;
  fill(0);
  textSize(18);
  text(round(timeLimit), 900, 100); 
  if(countDown = 0) {
    currentState = "End";
  }
}

function endGame() {
  strokeWeight(5);
  fill('darkblue');
  rect(300, 150, width/2, height/2);
  textAlign(CENTER, CENTER);
  fill(255);
  strokeWeight(1);
  text("The round has ended. Your score is: " + countDown + "\n" + 
  "Would you like to play again?"); 
}

function guess() {
  keyString = str(randImageKey);
  let guess = createInput('');
  guess.position((width/2), (height/1.1));
  guess.size(100);
  let guessImage = str(guess.value);
  if(guessImage.toLowerCase() = keyString.toLowerCase()) {
      currentState = "End";
    }
  }

 function serialEvent() {
  let data = port.readLine();
  if(data) {
    data = data.trim();
    if(data === "ButtonPressed") {
      currentState = "Play"; 
    }
  }
 }

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}
