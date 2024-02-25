let bug, bugs = [], rotationAngles = [0, 90, 180, 270],
score, gameTime, gameState, playTime, timeLeft; 


function preload() {

  let animations = {

  aliveUp: {row: 0, frames: 2},
  aliveLeft: {row: 1, frames: 2},
  aliveRight: {row: 2, frames: 2},
  aliveDown: {row: 0, frames: 2},
  deadUp: {row:0, col: 2, frames: 1},
  deadLeft: {row:1, col: 2, frames: 1},
  deadRight: {row:2, col: 2, frames: 1},
  deadDown: {row:3, col: 2, frames: 1},
    }
  

    if (bugs.size() < 1) {
      bugSpawner(20);
    }

    }
  
  
function setup() {
  createCanvas(600, 600);
  score = 0;
  gameTime = 30;
  gameState = "start";
  timeLeft = true;

}

function draw() {
  background(255);

  if(gameState == "start") {
    startGameNotif();
    if(mousePressed) {
      bugSpawner(20);
      playTime = millis(); 
      gameState = "play";
      }} 
  else if(gameState == "play") {
       timer();
       push();
       textSize(15);
       text(`Time remaining: ${gameTime} seconds`, 100, 100);
       text(`Bugs clicked: ${score}`, 100, 200);
       pop();
       bugs.overlap(bugs);
       
       bugs.forEach((bug) => {
        if(this.bug.ani = 'aliveUp' && this.bug.mouse.pressing()) {
          this.bug.changeAni('deadUp')
          this.bug.vel.x = 0;
          this.bug.vel.y = 0;
          score++;
          this.bug.remove();
         }
  
         if(this.bug.ani = 'aliveLeft' && this.bug.mouse.pressing()) {
          this.bug.changeAni('deadLeft');
          this.bug.vel.x = 0;
          this.bug.vel.y = 0;
          score++;
          this.bug.remove();
         }
  
         if(this.bug.ani = 'aliveRight' && this.bug.mouse.pressing()) {
          this.bug.changeAni('deadRight')
          this.bug.vel.x = 0;
          this.bug.vel.y = 0;
          score++;
          this.bug.remove();
         }
  
         if(this.bug.ani = 'aliveDown' && this.bug.mouse.pressing()) {
          this.bug.changeAni('deadDown')
          this.bug.vel.x = 0;
          this.bug.vel.y = 0;
          score++;
          this.bug.remove();
         }
  
         if(score++) {
          this.bug.speed += 0.5;
        }
       }) 
       if (bugs.size() < 1) {
        bugSpawner(20);
      }
  
      }
  
    else if(timeLeft = false) {
      bugs.length = 0;
      gameState = "end";
  }
    else if(gameState == 'end') {
      endGameNotif();
  }
  
}

class Bug {
  constructor(spritesheet, animations, x, y, w, h) {
    this.bug = new Sprite(x, y, w, h);
    this.bug.spriteSheet = spritesheet;
    this.bug.addAni('alive', 'assets/BugSpriteFinal.png', 13);
    this.bug.addAnis(animations);
    this.bug.anis.frameDelay = 5;
    this.bug.rotation = random(rotationAngles);
    switch(bug.rotation){
      case 0:
        bugUp();
        break;
      case 90:
        bugRight();
        break;
      case 180:
        bugDown();
        break;
      case 270:
        bugLeft();
        break;
      default:
        bug.rotation = 0;
        bugUp();
        break;
    }}

     bugRight() {
      this.bug.changeAni('aliveRight');
      this.bug.vel.x = 1;
      this.bug.vel.y = 0;
    }

     bugLeft() {
      this.bug.changeAni('aliveLeft');
      this.bug.vel.x = -1;
      this.bug.vel.y = 0;
    }

     bugUp() {
      this.bug.changeAni('aliveUp');
      this.bug.vel.x = 0;
      this.bug.vel.y = 1;
    }

    bugDown() {
      this.bug.changeAni('aliveDown');
      this.bug.vel.x = 0;
      this.bug.vel.y = -1;
    }}


function startGameNotif() {
  push();
  fill('cyan');
  stroke(0);
  strokeWeight(5);
  rect(width/4, height/4, 250, 250);
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(11);
  text(`Welcome to the bug squish game!\nUse your mouse or trackpad to click on the bugs.\n
  You have 30 seconds to click on \n as many bugs as you can.\n Good luck!`, 275, 230);
  pop();
}

function endGameNotif() {
  push();
  fill('cyan');
  stroke(0);
  strokeWeight(5);
  rect(width/4, height/4, 400, 400);
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(15);
  text(`Time is up! Your score is: ${score}!`, width/3, width/3);
  pop();
}

function timer() {
  gameTime = 30 - int((millis() - playTime) / 1000);
  if(gameTime > 30) {
    timeLeft = true;
  }
  else if(gameTime > 0) {
    timeLeft = true;
  }
  else if(gameTime = 0){
    timeLeft = false;
  }
}

function bugSpawner(num) {
  for(i = 0; i < num; i++) {
    newBug = new Bug('assets/BugSpriteFinal.png', animations, random(50, 750), random(50, 750), 50, 50);
    bugs.push(newBug);
  }
}


