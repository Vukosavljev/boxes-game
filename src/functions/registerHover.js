import { UNIT, canvas, ALL_SQUARES } from '../index';

function setColor(e, color) {
  const el = e.target;
  if (el) {
    const x = el.left / UNIT;
    const y = el.top / UNIT;
    if (ALL_SQUARES[x][y].marked) {
      ALL_SQUARES[x][y].canvas.set('fill', color);
      canvas.renderAll();
    }
  }
}


const registerHover = () => {
  canvas.on('mouse:over', (e) => setColor(e, '#aaa'));
  canvas.on('mouse:out', (e) => setColor(e, 'rgb(255, 164, 59)'));
};

export default registerHover;
