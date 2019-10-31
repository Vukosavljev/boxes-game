import {
  UNIT,
  ALL_SQUARES,
  canvas,
  FIRST_TIME,
} from '../globals';
import makeField from './makeField';
import initGrid from './initGrid';
import registeClick from './registerClick';

function initGame() {
  FIRST_TIME = true;
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
}


export default initGame;
