import {
  canvas,
  UNIT,
  FIRST_TIME,
  ALL_SQUARES,
} from '../index';
import registerHover from './registerHover';
import selectFieldAndMarkOthers from './selectFieldAndMarkOthers';
import makeField from './makeField';
import removeMarks from './removeMarks';
import initGrid from './initGrid';

const registeClick = () => {
  canvas.on('mouse:down', (event) => {
    const element = event.target;
    const coorX = element.left / UNIT;
    const coorY = element.top / UNIT;
    console.log(FIRST_TIME);
    if (FIRST_TIME) {
      console.log('sec')
      selectFieldAndMarkOthers(element, coorX, coorY);
      registerHover(coorX, coorY);
      FIRST_TIME = false;
      return;
    }

    if (ALL_SQUARES.every((num) => num.every((n) => n.selected === true))) {
      alert('Congratulation, you clicked all 100 boxes successfully!');
    }

    if (ALL_SQUARES[coorX][coorY].marked) {
      removeMarks();
      selectFieldAndMarkOthers(element, coorX, coorY);
    }
  });

  canvas.renderAll();
};


const initGame = () => {
  FIRST_TIME = false;
  initGrid();
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

export default initGame;
