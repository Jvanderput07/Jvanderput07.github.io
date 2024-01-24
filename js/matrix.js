const matrixContainer = document.getElementById('matrix');

function createStream() {
  const stream = document.createElement('div');
  stream.className = 'stream';
  stream.style.left = Math.random() * 100 + 'vw';
  stream.style.animationDuration = (Math.random() * 4 + 1) + 's'; 
  stream.textContent = Math.random() < 0.5 ? '0' : '1'; 
  matrixContainer.appendChild(stream);

  setTimeout(() => {
    stream.remove();
  }, 10000); 
}

function generateMatrix() {
  setInterval(createStream, 200);
}

generateMatrix();

//door joep van der Put 2024 hulp van internet
