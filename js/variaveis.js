
function preload() {
  trilha = loadSound("../sons/musica.mp3")
  batida = loadSound("../sons/batida.mp3")
  ponto = loadSound("../sons/ponto.mp3")
}

// Bolinha
let xB = 300, yB = 200; //coordenadas x e y
let d = 15, r = d/2; //diametro e raio
let px = 3, py = 3; //passo

// Raquetes
let xR1 = 5, yR1 = 150; //coordenadas de P1
let xR2 = 585, yR2 = 150; //coordenadas de P2
let pyR2; //passo da raquete P2 (modo CPU)
let wR = 10, hR = 90; //dimensões
let hit = false; //toque na raquete

// Placar
let P1 = 0, P2 = 0;

// Sons do jogo
let batida;
let ponto;
let trilha;
