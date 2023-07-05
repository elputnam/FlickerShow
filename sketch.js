//A dynamic collage

let squares = [];
let base;
let EL;
let x = 0;
let y = 0;
let num;

//preload assets: base photo, EL, 9 squares (in array)
function preload(){
  base = loadImage('assets/ELDad_books_base.png');
  EL = loadImage('assets/ELDad_books_EL.png')
  for (let i = 0; i < 9; i++){
    squares[i] = loadImage("assets/Grid_" + i + ".png");
  }  
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  //background(0);
  //background image
  //image(base, 0, 0, base.width/2, base.height/2);

  //Grid
  for (j = 0; j < squares.length; j++){
    image(squares[j], x, y, width/3, height/3);
    //move down
    x += width/3;
    if (x >= width){
      x = 0;
      y += height/3;
    }
    if (y >= height){
      y = 0;
    }
  }

  num = int(random(9));
  squares[num].filter(INVERT);

  //EL
  image(EL, 0, 0, EL.width/2, EL.height/2)
  //flickering EL
  if (frameCount%int(random(20))==0){
    EL.filter(INVERT);
  }

  
  
  //blend modes, filter INVERT
}
