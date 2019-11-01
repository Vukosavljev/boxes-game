import { modal, ALL_SQUARES } from '../index';
import showFreeFields from './showFreeFields';
import markFields from './markFields';


const selectFieldAndMarkOthers = (el, x, y) => {
  el.set('fill', '#ccc');
  ALL_SQUARES[x][y].selected = true;

  const surroundingFields = showFreeFields(x, y)
    .filter(([corX, corY]) => corX > -1 && corY > -1 && corX < 10 && corY < 10 && !ALL_SQUARES[corX][corY].selected);

  if (surroundingFields.length === 0) {
    modal.style.display = 'block';
    return;
  }

  surroundingFields.forEach(([coX, coY]) => markFields(coX, coY));
};

export default selectFieldAndMarkOthers;
