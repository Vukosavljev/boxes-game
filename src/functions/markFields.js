import { ALL_SQUARES } from '../index';

const markFields = (x, y) => {
  if (!ALL_SQUARES[x][y].selected) {
    ALL_SQUARES[x][y].canvas.set('fill', 'rgb(255, 164, 59)');
    ALL_SQUARES[x][y].marked = true;
  }
};

export default markFields;
