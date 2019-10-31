import fabric from 'fabric';
import { UNIT, canvas } from '../globals';

const propsForLine = () => ({
  stroke: 'black',
  strokeWidth: 1,
  selectable: false,
});


const initGrid = () => {
  canvas.clear();

  for (let i = 1; i < 10; i += 1) {
    canvas.add(new fabric.Line([i * UNIT, 0, i * UNIT, 400], propsForLine()));
    canvas.add(new fabric.Line([0, i * UNIT, 400, i * UNIT], propsForLine()));
  }
};

export default initGrid;
