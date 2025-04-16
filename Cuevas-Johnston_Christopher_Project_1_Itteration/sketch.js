//Iterations will be noted with a "//( )" as a way to seperate from seperating my inital seperations 

function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(222, 184, 135);
  
//Consistent Colors
//(Added new Button function for color)
let Zelda = color(50, 205, 50);
let Hyrule = color(255, 228, 181);  
let Button = color(220, 20, 60);


//(Modified to inlcude Shadow and move Base, while modifying size to curve object more)
noStroke();
//Shadow
fill(0, 85);  
rect(180, 180, 500, 300, 150);
//Base
fill(Zelda);  
rect(150, 150, 500, 300, 150);
fill(Hyrule);  
rect(160, 160, 480, 280, 140);

//Screen Area  
//(Adjusted Rect shape to become more circular)
push(); 
fill(Hyrule);  
stroke(189, 183, 107);
strokeWeight(5);
rect(280, 180, 240, 240,200);  
pop();  

//Screen
//(Adjusted rect functions to curve more)
push();
stroke(Zelda);
strokeWeight(5);
rect(295, 225, 210, 150, 200)
//(Added "noStroke")
noStroke();
fill(169);
rect(295, 225, 210, 150, 255);
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
//(Made Lines to be adjusted)
line(540, 325, 619, 325); 
line(540, 195, 567, 195);
line(540, 225, 567, 225);
line(540, 255, 567, 255);
  
stroke(127);
strokeWeight(10);
//(Modified lines to be adjusted)
line(540, 325, 567, 325);
line(592, 325, 619, 325);
line(540, 195, 567, 195);
line(540, 225, 567, 225);
line(540, 255, 567, 255);
pop();
  
//A & B 
push();
fill(Zelda);
//(Modified Circles to be adjusted)
circle(600, 358, 40);
circle(550, 358, 40);
fill(Button);
circle(600, 358, 35);
circle(550, 358, 35);
//(Added New circles)
fill(255, 90, 0);
circle(608, 353, 15);
circle(558, 353, 15);
pop();
   
//DPAD
push();
translate(0, 10);    
stroke(Zelda);
strokeWeight(25);
line(220, 328, 220, 378);
line(195, 355, 245, 355);
stroke(0);
strokeWeight(20); 
line(220, 328, 220, 378);
line(195, 353, 245, 353);
pop(); 
  
//Text Box
//(Moddified Text Box to be positioned Lower)
push();
fill(255);
stroke(0);
strokeWeight(2);
rect(190, 210, 60, 60, 20);
pop();
  
// Text
//(Moddified Text C and J to be positioned Higher)
push();
fill(0);
textFont('Georgia')
textSize(40);
text('C', 205, 248);
text('J', 208, 263);
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