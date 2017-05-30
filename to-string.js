const toString = rows => {
  let result = '';
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    let cells = [];
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      if (columnIndex === 3 || columnIndex === 6) cells.push('|');
      cells.push(rows[rowIndex][columnIndex] || ' ');
    }
    if (rowIndex === 3 || rowIndex === 6) result += '---------------------\n';
    result += cells.join(' ') + '\n';
    cells = [];
  }
  return result;
};

module.exports = toString;
