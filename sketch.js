let bug, allBugs, rotationAngles = [0, 90, 180, 270],
score, gameTime, gameState, timeLeft; 


function preload() {
  
  spritesheet = loadSpriteSheet('assets/BugSprite.png');

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
  class Bug {
    constructor(spritesheet, animations) {
      bug = new Sprite(random(50, 750), random(50, 750), 50, 50);
      this.bug.spriteSheet = spritesheet;
      bug.addAni('alive', 'assets/BugSprite.png', 13);
      this.bug.addAnis(animations);
      bug.anis.frameDelay = 5;
      bug.rotation = random(rotationAngles);
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
      }

      function bugRight() {
        bug.changeAni('aliveRight');
        bug.vel.x = 1;
        bug.vel.y = 0;
      }

      function bugLeft() {
        bug.changeAni('aliveLeft');
        bug.vel.x = -1;
        bug.vel.y = 0;
      }

      function bugUp() {
        bug.changeAni('aliveUp');
        bug.vel.x = 0;
        bug.vel.y = 1;
      }

      function bugDown() {
        bug.changeAni('aliveDown');
        bug.vel.x = 0;
        bug.vel.y = -1;
      }



    }}
  
  if (allBugs.size() < 1) {
    bugSpawner(20);
  }

}

function setup() {
  createCanvas(600, 600);
  allBugs = new Group();
  score = 0;
  gameTime = 30;
  gameState = "start";
  timeLeft = true;

}

function draw() {
  background(255);

  if(gameState == "start") {
    startGameNotif();
    if(mouseIsPressed) {
      bugSpawner(20);
      playTime = millis(); 
      gameState = "play";
      } else if(gameState == "play") {
       timer();
       push();
       textSize(15);
       text(`Time remaining: ${gameTime} seconds`, 100, 100);
       text(`Bugs clicked: ${score}`, 100, 200);
       pop();
       allBugs.overlap(allBugs);

       if(bug.ani = 'aliveUp' && bug.mouse.pressing()) {
        bug.changeAni('deadUp')
        bug.vel.x = 0;
        bug.vel.y = 0;
        score++;
        bug.remove();
       }

       if(bug.ani = 'aliveLeft' && bug.mouse.pressing()) {
        bug.changeAni('deadLeft');
        bug.vel.x = 0;
        bug.vel.y = 0;
        score++;
        bug.remove();
       }

       if(bug.ani = 'aliveRight' && bug.mouse.pressing()) {
        bug.changeAni('deadRight')
        bug.vel.x = 0;
        bug.vel.y = 0;
        score++;
        bug.remove();
       }

       if(bug.ani = 'aliveDown' && bug.mouse.pressing()) {
        bug.changeAni('deadDown')
        bug.vel.x = 0;
        bug.vel.y = 0;
        score++;
        bug.remove();
       }

       if(score++) {
        bug.speed = bug.speed + 0.5;
      }
  }

  if(timeLeft = false) {
    allBugs.remove();
    gameState = "end";
  }
  else if(gameState == 'end') {
    endGameNotif();
  }
  
}

function startGameNotif() {
  push();
  fill('cyan');
  stroke(0);
  strokeWeight(5);
  rect(width/4, height/4, 250, 250);
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(`Welcome to the bug squish game!\nUse your mouse or trackpad to click on the bugs.\n
  You have 30 seconds to click on as many bugs as you can.\n Good luck!`, width/3, width3);
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
  textSize(20);
  text(`Time is up! Your score is: ${score}!`, width/3, width3);
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
    newBug = new Bug('assets/BugSprite.png', animations);
    allBugs.add(newBug);
  }
}

}
