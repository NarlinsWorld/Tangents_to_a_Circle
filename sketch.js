function setup() {
  createCanvas(400, 400);
  let C = [100,-50];
  let A = [-100,100];
  let r = 45;
  let L = circleTangents(C,A,r);
  let P = L[0];
  let P1 = L[2];

  background(220);
  translate(width/2,height/2);
  scale(1,-1);
  drawAxes(); 
  myDrawing(C,A,P,P1,r);
 
}



/* Function to return the 2 tangent points drawn to
a circle from an external point 
*/

function circleTangents(C, A, r) {
  //construct vect u = C-A
  let u = [C[0] - A[0], C[1] - A[1]];
  let hyp = absoluteValue(u); //length of the hypotenuse.
  let d = Math.sqrt(hyp * hyp - r * r);
  let alpha = Math.atan(r / d);
  let e1 = unitVector(u);
  let e2 = unitVector([-u[1], u[0]]);
  let e3 = unitVector([u[1], -u[0]]); //switch up and down
  let v = [Math.cos(alpha) * e1[0] + Math.sin(alpha) * e2[0], Math.cos(alpha) * e1[1] + Math.sin(alpha) * e2[1]];
  let v1 = [Math.cos(alpha) * e1[0] + Math.sin(alpha) * e3[0], Math.cos(alpha) * e1[1] + Math.sin(alpha) * e3[1]];
  let P = [A[0] + d * v[0], A[1] + d * v[1]];
  let P1 = [A[0] + d * v1[0], A[1] + d * v1[1]];
  return [P, v, P1, v1]
}

function absoluteValue(vect) {
  return Math.sqrt(vect[0] * vect[0] + vect[1] * vect[1]);
}
function unitVector(vect){
  return [vect[0]/absoluteValue(vect), vect[1]/absoluteValue(vect)]
}

function drawAxes(){
  line(-width/2,0,width/2,0); //x axis when translate(width/2,height/2); scale(1,-1)
  line(0,-height/2,0,height/2); //y axis
}

function writeText(Text,xpos,ypos) {
  //now write the pt number beside the pt.
  push();
  translate(xpos, ypos);
  rotate(radians(180));
  scale(-1, 1);
  text(Text, 0, 0);
  //text("ROTATE ME", 0,0);
  pop();
}

function myDrawing(C,A,P,P1,r){
  noFill()
  circle(C[0],C[1],2*r); //circle at C
  circle(A[0],A[1],5); //point at A
  fill("black");
  writeText("A",A[0]+3,A[1]); //label the point
  fill("red");
  circle(P[0],P[1],7); //tangent point on circle
  circle(P1[0],P1[1],7); //tangent point on circle
  fill("black");
  writeText("P",P[0],P[1]+3); //label the point
  writeText("P1",P1[0]-8,P1[1]-15); //label the point
  line(A[0],A[1],C[0],C[1]);
  line(A[0],A[1],P[0],P[1]);
  line(A[0],A[1],P1[0],P1[1]);
  fill("black");
  circle(C[0],C[1],5);
  line(C[0],C[1],P[0],P[1]);
  line(C[0],C[1],P1[0],P1[1]);
}
