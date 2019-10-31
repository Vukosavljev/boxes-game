import './main.scss';
import initGame from './functions/initGame';

const modal = document.getElementById('modal');

function closeModal() {
  modal.style.display = 'none';
}

modal.addEventListener('click', closeModal);
document.getElementById('newGame').addEventListener('click', initGame);
document.getElementById('no').addEventListener('click', closeModal);
document.getElementById('yes').addEventListener('click', () => {
  closeModal();
  initGame();
});

initGame();

export default modal;
