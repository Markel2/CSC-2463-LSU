let bug;
let bugs = [];
let bugAnimation;

function preload() {
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

    bugs.push(new Bug('assets/BugSpriteFinal.png', animations, 200, 200, 270, 360));
    }
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

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
      this.bug.remove();}
  })}


class Bug {
  constructor(spritesheet, animations, x, y, w, h) {
    this.bug = new Sprite(x, y, w, h);
    this.bug.spriteSheet = spritesheet;
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
