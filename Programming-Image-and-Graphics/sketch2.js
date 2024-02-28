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

    bugs.push(new Bug('assets/BugSpriteFinal.png', animations, 200, 200, 120, 120));
    bugs.push(new Bug('assets/BugSpriteFinal.png', animations, 100, 100, 120, 120));
    }
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  bugs.forEach((bug) => {
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
      bug.remove();}
  })}


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
