let sprite;
let bugs = [];
let rotationAngles = [0, 90, 180, 270];

const GameState = {
  Start: "Start",
  Playing: "Playing",
  GameOver: "GameOver"
};

let game = { score: 0, maxScore: 0, maxTime: 30, elapsedTime: 0, state: GameState.Start};

let animations = {

  aliveUp: {row: 0, frames: 3},
  aliveLeft: {row: 1, frames: 3},
  aliveRight: {row: 2, frames: 3},
  aliveDown: {row: 3, frames: 3},
  deadUp: {row:0, col: 3, frames: 1},
  deadLeft: {row:1, col: 3, frames: 1},
  deadRight: {row:2, col: 3, frames: 1},
  deadDown: {row:3, col: 3, frames: 1},
    }
function preload() {
  for (let i = 0; i < 21; i++) {
    bugs.push(new Bug('assets/BugSpriteFinal.png', animations, random(50,750), random(50, 750), 80, 80, 1));
  }

}
function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  switch(game.state) {
    case GameState.Playing:
      background(220);
  
     
      fill(0);
      textSize(40);
      text(game.score,20,40);
      let currentTime = game.maxTime - game.elapsedTime;
      text(ceil(currentTime), 300,40);
      game.elapsedTime += deltaTime / 1000;

      if(bugs.size < 1) {
        for (let i = 0; i < 21; i++) {
          bugs.push(new Bug('assets/BugSpriteFinal.png', animations, random(50,750), random(50, 750), 80, 80, 1));
        }
      }
      if (currentTime < 0)
        game.state = GameState.GameOver;
      break;
    case GameState.GameOver:
      allSprites.remove();
      game.maxScore = max(game.score,game.maxScore);
      background(0);
      fill(255);
      textSize(40);
      textAlign(CENTER);
      text("Game Over!",200,200);
      textSize(35);
      text("Score: " + game.score,200,270);
      break;
    case GameState.Start:
      background(0);
      fill(255);
      textSize(30);
      textAlign(CENTER);
      text("Click within the space \n to begin the game! \n Squish as many bugs \n as you can with the mouse.",200,160);
}}

function mousePressed() {
  switch(game.state) {
    case GameState.Start:
      game.state = GameState.Playing;
      break;
    case GameState.Playing:
      bugs.forEach((bug) => {
        if(bug.ani = 'aliveUp' && bug.mouse.pressing()) {
          bug.changeAni('deadUp')
          bug.vel.x = 0;
          bug.vel.y = 0;
          score++;
          bugs.remove(bug);
         }
  
         if(bug.ani = 'aliveLeft' && bug.mouse.pressing()) {
          bug.changeAni('deadLeft');
          bug.vel.x = 0;
          bug.vel.y = 0;
          score++;
          bugs.remove(bug);
         }
  
         if(this.bug.ani = 'aliveRight' && this.bug.mouse.pressing()) {
          bug.changeAni('deadRight')
          bug.vel.x = 0;
          bug.vel.y = 0;
          score++;
          bugs.remove(bug);
         }
  
         if(bug.ani = 'aliveDown' && bug.mouse.pressing()) {
          bug.changeAni('deadDown')
          bug.vel.x = 0;
          bug.vel.y = 0;
          score++;
          bugs.remove(bug);
         }
  
         if(score++) {
          bug.speed += 0.5;
        }
      }) 
      break;
   }}
     
class Bug {
  constructor(spritesheet, animations, x, y, w, h, speed) {
   this.sprite = new Sprite(x, y, w, h);
   this.sprite.spriteSheet = spritesheet;
   this.sprite.addAnis(animations);
   this.sprite.collider = 'none';
   this.sprite.anis.frameDelay = 3;
   this.sprite.rotation = random(rotationAngles);
   this.sprite.speed = speed;
          switch(sprite.rotation){
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
            this.sprite.changeAni('aliveRight');
            this.sprite.vel.x = 1;
            this.sprite.vel.y = 0;
          }
      
           bugLeft() {
            this.sprite.changeAni('aliveLeft');
            this.sprite.vel.x = -1;
            this.sprite.vel.y = 0;
          }
      
           bugUp() {
            this.sprite.changeAni('aliveUp');
            this.sprite.vel.x = 0;
            this.sprite.vel.y = 1;
          }
      
          bugDown() {
            this.sprite.changeAni('aliveDown');
            this.sprite.vel.x = 0;
            this.sprite.vel.y = -1;
          }}
