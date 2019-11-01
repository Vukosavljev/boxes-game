import { fabric } from 'fabric';
import { UNIT } from '../index';

const propsForLine = () => ({
  stroke: 'black',
  strokeWidth: 1,
  selectable: false,
});


const initGrid = (can) => {
  can.clear();

  for (let i = 1; i < 10; i += 1) {
    can.add(new fabric.Line([i * UNIT, 0, i * UNIT, 400], propsForLine()));
    can.add(new fabric.Line([0, i * UNIT, 400, i * UNIT], propsForLine()));
  }
};

export default initGrid;
