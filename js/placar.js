
function placar() {
  stroke('white')
  textAlign(CENTER);
  textSize(16);
  fill('red')
  rect(width*0.22, 10, 40, 20)
  rect(width*0.72, 10, 40, 20)
  fill('white')
  text(P1, width*0.25, 25)
  text(P2, width*0.75, 25)

  if((xB + r) > (width - wR/2)) {
    P1++;
    ponto.play();
  }
  if((xB - r) < (0 + wR/2)) {
    P2++;
    ponto.play();
  }
}            