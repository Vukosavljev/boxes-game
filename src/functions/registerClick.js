import {
  UNIT,
  ALL_SQUARES,
  canvas,
  FIRST_TIME,
} from '../globals';
import registerHover from './registerHover';
import selectFieldAndMarkOthers from './selectFieldAndMarkOthers';

function removeMarks() {
  ALL_SQUARES.forEach((block) => {
    block.forEach((square) => {
      if (square.marked && !square.selected) {
        square.canvas.set('fill', 'white');
        square.marked = false;
      }
    });
  });
}

const registeClick = () => {
  canvas.on('mouse:down', (event) => {
    const element = event.target;
    const coorX = element.left / UNIT;
    const coorY = element.top / UNIT;
    if (FIRST_TIME) {
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

export default registeClick;
