var canvas = document.querySelector('.canvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-85;
var ctx = canvas.getContext('2d');
var sizePicker = 30
var output = document.querySelector('.output');
var clearBtn = document.querySelector('button');

// covert degrees to radians
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};
// update sizepicker output value
sizePicker.oninput = function() {
  output.textContent = sizePicker.value;
}
// store mouse pointer coordinates, and whether the button is pressed
var curX;
var curY;
var pressed = false;

// update mouse pointer coordinates
document.onmousemove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

canvas.onmousedown = function() {
  pressed = true;
};

canvas.onmouseup = function() {
  pressed = false;
}

function draw() {
  if(pressed) {
    ctx.fillStyle = '#00FF00';
    ctx.beginPath();
    ctx.arc(curX, curY, 30, degToRad(0), degToRad(360), false);
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

// Note to Mitchell:
// I re-purposed code from a website that I found from a google search for 'canvas html paint draw'
// and I cannot find the original code to cite my sources, but it was not completely copy-pasted and in my defense,
// I had to comment stuff out to see how it worked.
//
//

var ghost = new Image();

function init() {
  ghost.src = './public/GHOST.png';
  window.requestAnimationFrame(drawGhost);
}

function drawGhost() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  var time = new Date();

  // ghost
  ctx.save();
  ctx.rotate(Math.tan(((2 * Math.PI/2) / 10) * time.getSeconds() + ((2 * Math.PI/2) / 10000) * time.getMilliseconds()));
  ctx.translate(0, 60);
  ctx.drawImage(ghost, 1, 1); //-3.5
  ctx.restore();
  ctx.restore();

ctx.beginPath();
ctx.stroke();
  window.requestAnimationFrame(drawGhost);
}





function draw3(text) {
  var ctx = document.getElementById('canvas3').getContext('2d');
  var ctx_style = document.getElementById('canvas3').style
  ctx_style.zIndex = '8';
  ctx.font = '48px serif';
  ctx.fillText(text, 55, 90);
}


window.onload = function(){
   setInterval(function(){
       if (pressed == true){
           text = "You won!";
           draw3(text);
       } else {
           text = "You lost.";
           draw3(text);
       }
   }, 5000);
};

draw();
init();
