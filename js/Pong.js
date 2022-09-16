
function setup() {
  createCanvas(600, 400);
  //trilha.play(); // toca a música uma vez
  trilha.loop() // toca a música sem parar
}

function draw() {
  background(0);
  Bolinha();
  moverB();
  Colisao();
  Rede();
  Raquete(xR1, yR1);
  moverR1();
  Raquete(xR2, yR2);
  moverR2();
  colisaoR(xR1, yR1);
  colisaoR(xR2, yR2);
  placar();
}
