// eslint-disable-next-line import/no-cycle
import { fabric } from 'fabric';
import { initGame } from './functions/initGame';
import './main.scss';


const modal = document.getElementById('modal');
const UNIT = 40;
// eslint-disable-next-line import/no-mutable-exports
let FIRST_TIME = true;
let ALL_SQUARES = [];

fabric.Object.prototype.selectable = false;
const canvas = new fabric.Canvas('canvasId');
canvas.hoverCursor = 'pointer';
canvas.selection = false;

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

export {
  modal,
  UNIT,
  canvas,
  FIRST_TIME,
  ALL_SQUARES,
};
