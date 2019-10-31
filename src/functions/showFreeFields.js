const showFreeFields = (x, y) => (
  [
    [x, y - 3],
    [x + 2, y - 2],
    [x + 3, y],
    [x + 2, y + 2],
    [x, y + 3],
    [x - 2, y + 2],
    [x - 3, y],
    [x - 2, y - 2],
  ]
);

export default showFreeFields;
