
function Bolinha() { circle(xB, yB, d) }

function moverB() {
  xB += px;
  yB += py;
}

function Colisao() {
  if ((xB + r) >= (width - wR/2) || (xB - r) <= (0 + wR/2)) { px *= -1; }
  if ((yB + r) >= height || (yB-r) <= 0) { py *= -1; }
}

function Raquete(xR, yR) {
  stroke('black');
  rect(xR, yR, wR, hR);
}

function Rede() {
  rect(299, 5, 2, 390)
}

function moverR1() {
  if(keyIsDown(38)) {
    if(yR1 < 10) {yR1 = 0}
    yR1 -= 10;
  }
  if(keyIsDown(40)) {
    if((yR1 + hR) > 390) {yR1 = 390 - hR}
    yR1 += 10;
  }
}

function moverR2() {
  if(keyIsDown(87)) {
    if(yR2 < 10) { yR2 = 0; }
    yR2 -= 10;
  }
  if(keyIsDown(83)) {
    if((yR2 + hR) > 390) { yR2 = 390 - hR; }
    yR2 += 10;
  }
}

function colisaoR(xR, yR) {
  hit = collideRectCircle(xR, yR, wR, hR, xB, yB, r);
  if (hit == true) {
    px *= -1;
    batida.play();
  }
}