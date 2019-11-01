const markFields = (x, y, allSquares) => {
  if (!allSquares[x][y].selected) {
    allSquares[x][y].canvas.set('fill', 'rgb(255, 164, 59)');
    allSquares[x][y].marked = true;
  }
};

export default markFields;
