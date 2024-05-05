let images, imagekeys, imagePull, randImageKey;
let GameState, currentTime, countDown, timeLimit;

function setup() {
  createCanvas(1200, 700);
  images = {
    cat: "https://markel2.github.io/CSC-2463-LSU/assets/cat.webp", 
    school: "https://markel2.github.io/CSC-2463-LSU/assets/School.jpg",
    apple: "https://markel2.github.io/CSC-2463-LSU/assets/apple.png"
    
  }
  imagekeys = Object.keys(images);
  randImageKey = imagekeys[Math.floor(Math.random() * imagekeys.length)];
  currentState = "Start";
  timeLimit = 60;
  frameRate(60);
  }
  

function draw() {
  background(255);
  currentTime = int((millis())/1000);
  countDown = timeLimit - currentTime; 
  textSize(18);
  textAlign(RIGHT, TOP);
  text("Time: " + countDown); 
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

function imageDisplay(imagePull) {
  image(imagePull, 0, 0).center();
}

function startGame() {
  strokeWeight(5);
  fill('lightgreen');
  rect(300, 150, width/2, height/2);
  textAlign(CENTER, CENTER);
  fill(255);
  strokeWeight(1);
  text("Welcome to the Guess the Picture Game. \n Your objective is simple:" +
      "guess the picture! \n Your score will be based on how fast your guess is.\n" + 
      "Guesses are not case senstive. GOOD LUCK!");
}

function playGame() {
  if(countDown = 0) {
    currentState = "End";
  }
  else {
    guess();
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
  let guess = createInput('');
  guess.position((width/2), (height/1.1));
  guess.size(100);
  let guessImage = str(guess.value.toLowerCase());
  if(guessImage = randImageKey) {
    currentState = "End";
  }
  else{
   guess.remove();
  }
}

function keyPressed() {
  switch (currentState) {
    case "Start":
      if(key == 's') {
        currentState = "Play";
      };}
  
}

