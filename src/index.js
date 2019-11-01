import { fabric } from 'fabric';
import registerHover from './functions/registerHover';
import selectFieldAndMarkOthers from './functions/selectFieldAndMarkOthers';
import makeField from './functions/makeField';
import removeMarks from './functions/removeMarks';
import initGrid from './functions/initGrid';
import './main.scss';


const modal = document.getElementById('modal');
const UNIT = 40;
let FIRST_TIME = true;
let ALL_SQUARES = [];

fabric.Object.prototype.selectable = false;
const canvas = new fabric.Canvas('canvasId');
canvas.hoverCursor = 'pointer';
canvas.selection = false;

function closeModal() {
  modal.style.display = 'none';
}

const registeClick = () => {
  canvas.on('mouse:down', (event) => {
    const element = event.target;
    const coorX = element.left / UNIT;
    const coorY = element.top / UNIT;

    if (FIRST_TIME) {
      selectFieldAndMarkOthers(element, coorX, coorY, ALL_SQUARES);
      registerHover(coorX, coorY);
      FIRST_TIME = false;
      return;
    }

    if (ALL_SQUARES.every((num) => num.every((n) => n.selected === true))) {
      alert('Congratulation, you clicked all 100 boxes successfully!');
    }

    if (ALL_SQUARES[coorX][coorY].marked) {
      removeMarks();
      selectFieldAndMarkOthers(element, coorX, coorY, ALL_SQUARES);
    }
  });

  canvas.renderAll();
};


const initGame = () => {
  FIRST_TIME = true;
  initGrid(canvas);
  ALL_SQUARES = [];

  for (let i = 0; i < 10; i += 1) {
    ALL_SQUARES.push([]);
    for (let j = 0; j < 10; j += 1) {
      ALL_SQUARES[i].push(
        {
          selected: false,
          marked: false,
          canvas: makeField(i * 40, j * 40),
          coordinate: [i * UNIT, j * UNIT],
        }
      );
      canvas.add(ALL_SQUARES[i][j].canvas);
    }
  }

  registeClick();
};

modal.addEventListener('click', closeModal);
document.getElementById('newGame').addEventListener('click', () => initGame());
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
  ALL_SQUARES,
};
