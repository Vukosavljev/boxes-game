import { fabric } from 'fabric';
import UNIT from '../globals';

const makeField = (x, y, color = 'white') => (
  new fabric.Rect({
    left: x,
    top: y,
    fill: color,
    width: UNIT,
    height: UNIT,
    selectable: false,
  })
);

export default makeField;
