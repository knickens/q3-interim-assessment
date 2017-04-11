var kRed = 50;
var kBlue = 50;
var kGreen = 255;
var x = 200;
var y = 200;
var i = [10,20,30,40,50,60];


function setup(){
 createCanvas(700,500);
 background(255,10);
}

function draw(){
    paint();
    action();
 topRow();
  bottomRow();
    
}


function paint(){
 kiRed = random(0,255);
 kiGreen = random(0,255);
 kiBlue = random(0,255);
   stroke(kiBlue,kiGreen,kiRed,90);
   strokeWeight(2);
    fill(255);
  ellipse(250,200,15,15);
}

function action(){
    if(mouseIsPressed){
        noStroke();
        fill(kiBlue,kiGreen,kiRed,90);
  triangle(mouseX,mouseY,300,300,250,200);  
    }
}


function topRow(){
    size = [10];
  for(var y = 50; y <= 450; y = y + 100){
    stroke(kiBlue,kiGreen,kiRed,90)
    fill(255,5);
    ellipse(250,y,50,50);
    
   }  
}

function bottomRow(){
   size = [10];
  for(var x = 50; x <= 450; x = x + 100){
    stroke(kiBlue,kiGreen,kiRed,90)
    fill(255,10);
    ellipse(x,200,50,50);
  }
}