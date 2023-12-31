//A dynamic collage, I am my father's daughter

let squares = [];
let base;
let EL;
let x = 0;
let y = 0;
let num;
let alp = 0;
let MIN = 0;
let MAX = 100;
let g;

//preload assets: base photo, EL, 9 squares (in array)
function preload(){
  base = loadImage('assets/ELDad_books_base.png');
  EL = loadImage('assets/ELDad_books_EL.png');
  dad = loadImage('assets/ELDad_books_dad.png')
  for (let i = 0; i < 9; i++){
    squares[i] = loadImage("assets/Grid_" + i + ".png");
  }  
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
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
  if (frameCount%5==0){
  num = int(random(9));
  squares[num].filter(INVERT);
    
  }

  //dad
    push();
    //translate(random(-10, 10), 0);
    tint(255, alp);
    // dad.filter();
    // tint(255, random(50));
    image(dad, 0, 0, dad.width/2, dad.height/2);
    pop();
    g = random(1);
    alp += g;
    dad.filter(GRAY);


    if (alp <= MIN || alp >= MAX ){
      g *= -1;
  }

  if (frameCount%int(random(20))==0){
    dad.filter(INVERT);
  }

  //background rect/overall flicker of the universe
  fill(0, random(40, 100));
  rect(0, 0, width, height);

  //EL
  image(EL, 0, 0, EL.width/2, EL.height/2)
  
  //flickering EL
  if (frameCount%int(random(20))==0){
    EL.filter(INVERT);
    
  }

    // //dancing EL
    // push();
    // translate(random(-200, 700), 0);
    // //scale(-1, 1);
    // tint(random(360), 100, 100, random(40));
    // image(EL, 0, 0, EL.width/2, EL.height/2);
    // pop();
  
    if (frameCount%4==0 || frameCount%10==0){
  //if (keyIsPressed === true){ 
   //dancing EL
   push();
   translate(random(-20, 20), 0);
   // translate(random(-200, 700), 0);
   //scale(-1, 1);
   tint(random(360), 100, 100, random(40));
   image(EL, 0, 0, EL.width/2, EL.height/2);
   pop();
  }
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}


   

