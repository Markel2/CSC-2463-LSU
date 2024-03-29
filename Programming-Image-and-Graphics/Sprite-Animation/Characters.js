let sprite;
let characters = [];

function preload() {
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}

 };
  
 characters.push(new Character('https://markel2.github.io/CSC-2463-LSU/assets/SpelunkyPurple.png', animations, 100, 100, 80, 80));
 characters.push(new Character('https://markel2.github.io/CSC-2463-LSU/assets/SpelunkyNinja.png', animations, 200, 200, 80, 80));
 characters.push(new Character('https://markel2.github.io/CSC-2463-LSU/assets/SpelunkyJungleWarrior.png', animations, 300, 300, 80, 80));

}


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  
  characters.forEach((character) => {
    if (kb.pressing ('d')) {
      character.walkRight();
    } else if(kb.pressing ('a')) {
      character.walkLeft();
    } else if(kb.pressing ('w')) {
      character.walkUp();
    } else if(kb.pressing ('s')) {
      character.walkDown();
    }
    
    
    if(character.sprite.x + character.sprite.x/4 > width) {
      character.walkLeft();
    } else if (character.sprite.x - character.sprite.x/4 < 0) {
      character.walkRight();
    }
  })}
  



class Character{
  constructor(spritesheet, animations, x, y, w, h) {
    this.sprite = new Sprite(x, y, w, h);
    this.sprite.spriteSheet = spritesheet;
    this.sprite.anis.frameDelay = 8;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');}

   stop() {
    this.sprite.changeAni('stand');
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
}

   walkRight() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1;
    this.sprite.vel.y = 0;
}

   walkLeft() {
    this.sprite.changeAni('walkRight'); 
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
    this.sprite.vel.y = 0;
}

   walkUp() {
    this.sprite.changeAni('walkUp');
    this.sprite.vel.y = -1;
    this.sprite.vel.x = 0;
}

   walkDown() {
    this.sprite.changeAni('walkDown');
    this.sprite.vel.y = 1;
    this.sprite.vel.x = 0;
}

}



