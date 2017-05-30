const cellToBox = (rowIndex, columnIndex) => {
  const boxRow = Math.floor(rowIndex / 3);
  const boxColumn = Math.floor(columnIndex / 3);
  if (boxRow === 0) return boxColumn;
  if (boxRow === 1) return 3 + boxColumn;
  if (boxRow === 2) return 6 + boxColumn;
  throw new Error(`Unkown cellToBox (${rowIndex}, ${columnIndex})`);
};

module.exports = cellToBox;
