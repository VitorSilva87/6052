let rotateX = 0;
let rotateY = 0;
let positionX = window.innerWidth / 2 - 75; // Posição inicial no centro da tela
let positionY = window.innerHeight / 2 - 75; // Posição inicial no centro da tela
const step = 10; // Valor para quantos pixels o cubo anda a cada tecla pressionada
const cubeSize = 150; // Tamanho do cubo

const scene = document.getElementById('scene');
const cube = document.getElementById('cube');

// Posicionar a cena no ponto inicial
scene.style.left = `${positionX}px`;
scene.style.top = `${positionY}px`;

// Rotação contínua do cubo
function rotateCube() {
  rotateX += 1; // Incremento de rotação em X
  rotateY += 1; // Incremento de rotação em Y
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // Atualiza a rotação
  requestAnimationFrame(rotateCube);
}
requestAnimationFrame(rotateCube);

// Movimentação
const keysPressed = {};

document.addEventListener('keydown', function(event) {
  keysPressed[event.code] = true; // Marca a tecla como pressionada
});

document.addEventListener('keyup', function(event) {
  keysPressed[event.code] = false; // Desmarca a tecla ao soltar
});

// Atualiza a posição do cubo com base nas teclas pressionadas
function moveCube() {
  // Limites da tela considerando o tamanho do cubo
  const minX = 0;
  const minY = 0;
  const maxX = window.innerWidth - cubeSize;
  const maxY = window.innerHeight - cubeSize;

  if (keysPressed['ArrowUp'] && positionY > minY) {
    positionY = Math.max(minY, positionY - step);
  }
  if (keysPressed['ArrowDown'] && positionY < maxY) {
    positionY = Math.min(maxY, positionY + step);
  }
  if (keysPressed['ArrowLeft'] && positionX > minX) {
    positionX = Math.max(minX, positionX - step);
  }
  if (keysPressed['ArrowRight'] && positionX < maxX) {
    positionX = Math.min(maxX, positionX + step);
  }

  // Atualizar a posição do cubo
  scene.style.left = `${positionX}px`;
  scene.style.top = `${positionY}px`;

  requestAnimationFrame(moveCube);
}
requestAnimationFrame(moveCube);

// Atualizar tamanho da tela caso a janela seja redimensionada
window.addEventListener('resize', () => {
  // Ajustar a posição do cubo caso a janela seja redimensionada
  positionX = Math.min(positionX, window.innerWidth - cubeSize);
  positionY = Math.min(positionY, window.innerHeight - cubeSize);
  
  // Atualizar a posição do cubo
  scene.style.left = `${positionX}px`;
  scene.style.top = `${positionY}px`;
});