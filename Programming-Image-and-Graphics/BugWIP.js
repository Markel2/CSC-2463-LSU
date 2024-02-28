let spriteSheet;
let rotationAngles = [0, 90, 180, 270];

const GameState = {
  Start: "Start",
  Playing: "Playing",
  GameOver: "GameOver"
};

let game = { score: 0, maxScore: 0, maxTime: 10, elapsedTime: 0, totalSprites: 20, state: GameState.Start};

let animations = {

  aliveUp: {row: 0, frames: 2},
  aliveLeft: {row: 1, frames: 2},
  aliveRight: {row: 3, frames: 2},
  aliveDown: {row: 2, frames: 2},
  deadUp: {row:0, col: 2, frames: 1},
  deadLeft: {row:1, col: 2, frames: 1},
  deadRight: {row:3, col: 2, frames: 1},
  deadDown: {row:2, col: 2, frames: 1},
    }
function preload() {
  spriteSheet = loadImage('assets/BugSpriteFinal.png');

}
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  angleMode(DEGREES);


}

function draw() {
  switch(game.state) {
    case GameState.Playing:
      background(220);
  
      for(let i=0; i < animations.length; i++) {
        animations[i].draw();
      }
      fill(0);
      textSize(40);
      text(game.score,20,40);
      let currentTime = game.maxTime - game.elapsedTime;
      text(ceil(currentTime), 300,40);
      game.elapsedTime += deltaTime / 1000;

      if (currentTime < 0)
        game.state = GameState.GameOver;
      break;
    case GameState.GameOver:
      game.maxScore = max(game.score,game.maxScore);

      background(0);
      fill(255);
      textSize(40);
      textAlign(CENTER);
      text("Game Over!",200,200);
      textSize(35);
      text("Score: " + game.score,200,270);
      text("Max Score: " + game.maxScore,200,320);
      break;
    case GameState.Start:
      background(0);
      fill(255);
      textSize(50);
      textAlign(CENTER);
}}

function mousePressed() {
  switch(game.state) {
    case GameState.Start:
      game.state = GameState.Playing;
      break;
    case GameState.Playing:
      for (let i=0; i < animations.length; i++) {
        let contains = animations[i].contains(mouseX,mouseY);
        if (contains) {
          if (animations[i].moving != 0) {
            animations[i].stop();
            if (animations[i].spritesheet === spriteSheets[game.targetSprite])
              game.score += 1;

          }
          else {
            if (animations[i].xDirection === 1)
              animations[i].aliveLeft();
            else
              animations[i].aliveRight();
          }
        }
      }
      break;
    case GameState.GameOver:
      reset();
      game.state = GameState.Playing;
      break;}}
     
class Bug {
  constructor(spritesheet, animations, x, y, w, h, speed) {
   this.bug = new Sprite(x, y, w, h);
   this.bug.spriteSheet = spritesheet;
   this.bug.addAnis(animations);
   this.bug.anis.frameDelay = 3;
   this.bug.rotation = random(rotationAngles);
   this.speed = speed;
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
