import { ALL_SQUARES } from '../index';

const removeMarks = () => {
  ALL_SQUARES.forEach((block) => {
    block.forEach((square) => {
      if (square.marked && !square.selected) {
        square.canvas.set('fill', 'white');
        square.marked = false;
      }
    });
  });
};

export default removeMarks;
