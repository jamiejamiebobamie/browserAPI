
var moon = new Image();

function init() {
  moon.src = './public/GHOST.png';
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

  // Moon // ghost
  ctx.save();
  ctx.rotate(Math.tan(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds()));
  ctx.translate(0, 0);
  ctx.drawImage(moon, -.05, -.05); //-3.5
  ctx.restore();

  ctx.restore();

  window.requestAnimationFrame(drawGhost);
}

init();
