let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

cnv.width = 400;
cnv.height = 500;

requestAnimationFrame(draw);

let lifty = 0;
let pshiftbuild = 0;
let pshiftdecor = 0;

function draw() {
  ctx.fillStyle = "#291d1f";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //sun
  ctx.drawImage(glow, 330, 20, 50, 40);

  //Building

  let y = pshiftbuild + 500;
  let x = 260;
  ctx.fillStyle = "#61383f";
  for (let i = 0; i < 45; i++) {
    // ctx.beginPath();
    // ctx.arc(x - 70, y - 400 + i * 10, 100, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.drawImage(glow, x - 169, y - 540 + i * 10, 200, 230);
  }
  //Building structure
  ctx.strokeStyle = "#453d42";
  ctx.lineWidth = 2;
  ctx.fillStyle = "#756e6f";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 10, y - 460);
  ctx.lineTo(x - 130, y - 460);
  ctx.lineTo(x - 140, y);
  ctx.lineTo(x, y);
  ctx.fill();

  //dark shade
  ctx.fillStyle = "#523f42";
  ctx.beginPath();
  ctx.moveTo(x - 110, y);
  ctx.lineTo(x - 120, y - 460);
  ctx.lineTo(x - 130, y - 460);
  ctx.lineTo(x - 140, y);
  ctx.lineTo(x, y);
  ctx.fill();

  //Spires
  ctx.beginPath();
  ctx.moveTo(x - 40, y - 460);
  ctx.lineTo(x - 40, y - 480);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 70, y - 460);
  ctx.lineTo(x - 70, y - 490);
  ctx.stroke();
  // Windows
  ctx.strokeStyle = "#b31e32";
  for (let c = 0; c < 10; c++) {
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.moveTo(x - 110 + c * 10 + i * 0.5, y - 450 + i * 20);
      ctx.lineTo(x - 110 + c * 10 + i * 0.5 + 0.5, y - 435 + i * 20);
      ctx.stroke();
    }
  }

  //dark mask
  ctx.drawImage(mask, 0, 100);

  //bridge

  ctx.fillStyle = "#242229";
  ctx.strokeStyle = "#1c1c1f";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(0, lifty + 415);
  ctx.lineTo(50, lifty + 365);
  ctx.lineTo(100, lifty + 415);
  ctx.lineTo(150, lifty + 365);
  ctx.lineTo(200, lifty + 415);
  ctx.lineTo(250, lifty + 365);
  ctx.lineTo(300, lifty + 415);
  ctx.lineTo(350, lifty + 365);
  ctx.lineTo(400, lifty + 415);
  ctx.lineTo(450, lifty + 365);
  ctx.lineTo(0, lifty + 365);
  ctx.stroke();

  ctx.fillRect(20, lifty + 345, 4, 140);
  ctx.fillRect(376, lifty + 345, 4, 130);

  ctx.drawImage(pglow, 45, lifty + 395, 60, 60);
  ctx.drawImage(pglow, 170, lifty + 395, 60, 60);
  ctx.drawImage(pglow, 295, lifty + 395, 60, 60);

  ctx.fillRect(50, lifty + 418, 50, 15);
  ctx.fillRect(175, lifty + 418, 50, 15);
  ctx.fillRect(300, lifty + 418, 50, 15);
  //Main bridge
  ctx.fillRect(0, lifty + 400, 400, 30);

  //side bars

  ctx.fillStyle = "#17141f";
  ctx.strokeStyle = "#17141f";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(10, pshiftdecor + 150);
  ctx.lineTo(40, pshiftdecor + 110);
  ctx.lineTo(40, pshiftdecor + 0);
  ctx.lineTo(10, pshiftdecor + -40);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(380, pshiftdecor + 150);
  ctx.lineTo(380, pshiftdecor + 70);
  ctx.stroke();

  ctx.strokeStyle = "#14111a";
  ctx.lineWidth = 20;

  ctx.fillRect(0, 0, 20, 500);
  ctx.fillRect(400, 0, -20, 500);

  // lifty -= 0.5;
  // if (lifty < -500) {
  //   lifty = 150;
  // }

  pshiftbuild += 0.1;
  pshiftdecor += 0.5;
  if (pshiftdecor < -400) {
  }
  requestAnimationFrame(draw);
}
