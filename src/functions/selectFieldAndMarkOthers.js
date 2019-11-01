import { modal } from '../index';
import showFreeFields from './showFreeFields';
import markFields from './markFields';


const selectFieldAndMarkOthers = (el, x, y, allSquares) => {
  el.set('fill', '#ccc');
  allSquares[x][y].selected = true;

  const surroundingFields = showFreeFields(x, y)
    .filter(([corX, corY]) => corX > -1 && corY > -1 && corX < 10 && corY < 10 && !allSquares[corX][corY].selected);

  if (surroundingFields.length === 0) {
    modal.style.display = 'block';
    return;
  }

  surroundingFields.forEach(([coX, coY]) => markFields(coX, coY, allSquares));
};

export default selectFieldAndMarkOthers;
