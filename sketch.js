let sprite;
let sprite2;
let sprite3;
let startingPosX = [random(1, width), random(1, width), random(1, width)];
let startingPosY = [random(1, height), random(1, height), random(1, height)];
function preload() {
 
 
  sprite = new Sprite(200,200, 80, 80);
  sprite.spriteSheet = 'assets/SpelunkyPurple.png';
  sprite2 = new Sprite(350,350, 100, 100);
  sprite2.spriteSheet = 'assets/SpelunkyClassicGuy.png';
  sprite3 = new Sprite(150, 150, 80, 80);
  sprite3.spriteSheet = 'assets/SpelunkyNinja.png';
  
  
  let animations = {
     stand: { row: 0, frames: 1},
     walkRight: {row: 0, col: 1, frames: 8},
     walkUp: {row: 5, frames: 6},
     walkDown: {row: 5, col: 6, frames: 6}

  };
  sprite.anis.frameDelay = 8;
  sprite.addAnis(animations);
  sprite.changeAni('stand');
  sprite2.anis.frameDelay = 8;
  sprite2.addAnis(animations);
  sprite2.changeAni('stand');
  sprite3.anis.frameDelay = 8;
  sprite3.addAnis(animations);
  sprite3.changeAni('stand');
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  
  if (kb.pressing ('d')) {
    walkRight();
  } else if(kb.pressing ('a')) {
    walkLeft();
  } else if(kb.pressing ('w')) {
    walkUp();
  } else if(kb.pressing ('s')) {
    walkDown();
  } else {

    stop();
  }
  if(sprite.x + sprite.x/4 > width) {
    sprite.vel.x = -1;
    sprite.scale.x = -1;
  } else if (sprite.x - sprite.x/4 < 0) {
    sprite.vel.x = 1;
    sprite.scale.x = 1;
  }
}

function stop() {
  sprite.changeAni('stand');
  sprite.vel.x = 0;
  sprite.vel.y = 0;
}

function overlapIgnore() {}

function walkRight() {
  sprite.changeAni('walkRight');
  sprite.vel.x = 1;
  sprite.scale.x = 1;
  sprite.vel.y = 0;
}

function walkLeft() {
  sprite.changeAni('walkRight'); 
  sprite.vel.x = -1;
  sprite.scale.x = -1;
  sprite.vel.y = 0;
}

function walkUp() {
  sprite.changeAni('walkUp');
  sprite.vel.y = -1;
  sprite.vel.x = 0;
}

function walkDown() {
  sprite.changeAni('walkDown');
  sprite.vel.y = 1;
  sprite.vel.x = 0;
}


