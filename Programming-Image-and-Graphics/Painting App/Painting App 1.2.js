let colorPalette;

function setup() {
  createCanvas(1200, 600);
  background(220);  

  colorPalette = [
    new ColorChoice(0, 0, color('red')),
    new ColorChoice(0, 33, color('orange')),
    new ColorChoice(0, 66, color('yellow')),
    new ColorChoice(0, 99, color('green')),
    new ColorChoice(0, 132, color('cyan')),
    new ColorChoice(0, 165, color('blue')),
    new ColorChoice(0, 198, color('magenta')),
    new ColorChoice(0, 231, color('brown')),
    new ColorChoice(0, 264, color('white')),
    new ColorChoice(0, 297, color('black'))
  ];
  
}


function mousePressed() {
  
  for(let i = 0; i , i < colorPalette.length; i++) {
    if(colorPalette[i].contains(mouseX, mouseY) && mouseX > 0
    && mouseX < 30 && mouseY > 0 && mouseY < 330) {
      selectedColor = colorPalette[i].fill;
      }}
    
  
     }
function mouseDragged() {
  if(mouseX > 50 && mouseY > 0) {
    strokeWeight(10);
    stroke(selectedColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}

function draw() {
 
 for(let i =0; i , i < colorPalette.length; i++) {
    colorPalette[i].draw();
 
      
    } 
    
    
  }
      
    
  
   
  

class ColorChoice {
  constructor(x,y, fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
  draw () {
    fill(this.fill);
    noStroke();
    square(this.x, this.y, 30);}

  contains(x,y) {
    let insideX = x >= this.x && x <= this.x+30;
    let insideY = y >= this.y && y <= this.y+30; 
    return(insideX, insideY); 
  }


}


