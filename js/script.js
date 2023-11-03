const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); // Corrigido para selecionar o elemento com a classe 'pipe'

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom); // ParseInt para garantir que o valor seja tratado como número

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

     mario.src = './imagens/game-over.png';
     mario.style.width = '75px'
     mario.style.marginLeft = '50px'
  }

}, 10);

document.addEventListener('keydown', jump);
