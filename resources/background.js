var canvas = document.getElementById('background');

var ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight +1000;


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min))  + min;
}


ctx.strokeStyle = "rgba(97, 165, 255,0.35)";

ctx.fillStyle = "rgba(255,255,255)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
var xPos = [];
var yPos = [];
var numOfUnitX = 12;
var numOfUnitY = 12;
var unitW = (canvas.width +300)/numOfUnitX;
var unitH = (canvas.height +500)/numOfUnitY;

for (y = 0; y < numOfUnitX; y++) {
  for (x = 0; x < numOfUnitY; x++) {
    xPos.push(getRndInteger(unitW * (x-1), x*unitW));
    var xP = getRndInteger(unitW * (x-1), x*unitW);
    yPos.push(getRndInteger(unitH * (y-1), y*unitH));
    var yP = getRndInteger(unitH * (y-1), y*unitH);
  }
}

// console.log("xPos len is " + xPos.length + " yPos len is " + yPos.length);
// console.log(xPos[xPos.length - 1], yPos[yPos.length -1]);
// console.log("xPos is " + xPos );
// console.log("yPos is " + yPos );
// console.log("count is "+ count);


for (i = 0; i < xPos.length -1; i++){
  if ((i+1)%numOfUnitX != 0) {


    ctx.beginPath();
    ctx.moveTo(xPos[i], yPos[i]);
    ctx.lineTo(xPos[i+1], yPos[i+1] );

    ctx.lineTo(xPos[i + numOfUnitX], yPos[i+numOfUnitX]);

    ctx.lineTo(xPos[i], yPos[i]);
    ctx.closePath();
    ctx.stroke();
  }

}

// document.body.style.background = 'url(' + c.toDataURL() + ')';
