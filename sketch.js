var peter=250;
var maria=187;
var randy=31;
var rosa=249;
var any=76;
var flor=21;
var mor=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(peter, maria, randy);//orange color
  peter=peter-0.25;
  maria=maria-0.25;
  randy=randy-0.25;
  fill(151, 145, 145);//gray color
  stroke(8, 8, 8);//black color
  strokeWeight(3);
  rect(10,350,90,500);//first building
  rect(120,250,100,500);//second building
  rect(240,190,100,500);//third building
  rect(370,280,80,500);//forth building
  
  fill(rosa, any, flor);//red color
  stroke(254, 253, 253);//white color
  strokeWeight(2);
  ellipse(430,80,100,100);//red sun
  rosa=rosa+0.30;
  any=any+0.30;
  flor=flor+0.30;
 
  fill(mor);//white color
  stroke(8, 8, 8);//black color
  strokeWeight(1);
  rect(20,380,20,20);//window
  rect(70,420,20,20);//window
  rect(20,460,20,20);//window
  
  rect(140,280,20,20);//window
  rect(180,320,20,20);//window
  rect(140,360,20,20);//window
  rect(140,400,20,20);//window
  rect(180,440,20,20);//window
  
  rect(300,210,20,20);//window
  rect(300,250,20,20);//window
  rect(260,290,20,20);//window
  rect(300,330,20,20);//window
  rect(260,370,20,20);//window
  rect(300,410,20,20);//window
  rect(300,450,20,20);//window
  
  rect(380,310,18,18);//window
  rect(380,350,18,18);//window
  rect(420,390,18,18);//window
  rect(420,430,18,18);//window
  rect(380,460,18,18);//window
  
}

function mousePressed(){
  mor=mor+255;
  if (mor>255){
    mor=0;
  }else{
    mor=mor+1
  }
}