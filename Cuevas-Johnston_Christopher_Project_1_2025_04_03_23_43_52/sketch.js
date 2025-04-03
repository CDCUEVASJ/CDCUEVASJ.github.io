function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(222, 184, 135);
  
//Consistent Colors
let Zelda = color(50, 205, 50);
let Hyrule = color(255, 228, 181);  

//Base
noStroke();
fill(0, 85);  
rect(180, 180, 500, 300, 80);
fill(Zelda);  
rect(150, 150, 500, 300, 80);
fill(Hyrule);  
rect(160, 160, 480, 280, 70);

//Screen Area  
push(); 
fill(Hyrule);  
stroke(189, 183, 107);
strokeWeight(5);
rect(275, 175, 250, 250,50);  
pop();  

//Screen
push();
stroke(Zelda);
strokeWeight(5);
rect(300, 225, 200, 150, 20);
fill(169);
rect(300, 225, 200, 150);
pop(); 

//Screen Image  
push();
fill(211);
stroke(47, 79, 79);
strokeWeight(5);
beginShape();
vertex(350, 242)//1
vertex(350, 320)//2
vertex(400, 355)//3
vertex(450, 320)//4
vertex(450, 242)//5
vertex(430, 242)//6
vertex(430, 262)//7
vertex(370, 262)//7
vertex(370, 242)//8
vertex(350, 242)//9
endShape();
line(400, 330, 400, 270);
line(380, 290, 420, 290);
pop();  


//Grey buttons
push();
stroke(Zelda);
strokeWeight(15);
line(545, 340, 624, 340); 
line(545, 180, 572, 180);
line(545, 210, 572, 210);
line(545, 240, 572, 240);
  
stroke(127);
strokeWeight(10);
line(545, 340, 572, 340);
line(597, 340, 624, 340);
line(545, 180, 572, 180);
line(545, 210, 572, 210);
line(545, 240, 572, 240);
pop();
  
//A & B 
push();
fill(Zelda);
circle(610, 378, 40);
circle(560, 378, 40);
fill(220, 20, 60);
circle(610, 378, 35);
circle(560, 378, 35);
pop();
  
//DPAD
push();
translate(0, 10);    
stroke(Zelda);
strokeWeight(25);
line(220, 333, 220, 383);
line(195, 358, 245, 358);
stroke(0);
strokeWeight(20); 
line(220, 333, 220, 383);
line(195, 358, 245, 358);
pop(); 
  
//Text Box
push();
fill(255);
stroke(0);
strokeWeight(2);
rect(190, 190, 60, 60, 20);
pop();
  
// Text
push();
fill(0);
textFont('Georgia')
textSize(40);
text('C', 205, 228);
text('J', 208, 243);
pop();

push();
fill(0);
textFont('Times New Roman')
textSize(20)
text('The Legend of Zelda-Game and Watch (2021)', 34, 34);//Name of Object
pop();
  
//AT THE BOTTOM NO MATTER WHAT!!!
fill(90);
text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}