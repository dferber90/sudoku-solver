const { cloneDeep, times } = require('lodash');
const hasDuplicates = require('has-duplicates');
const toString = require('./to-string');

const createEmptyRow = () => [0, 0, 0, 0, 0, 0, 0, 0, 0];
const createEmptyGrid = () => times(9, createEmptyRow);

class Grid {
  constructor(rows) {
    this.rows = cloneDeep(rows) || createEmptyGrid();
  }
  clone() {
    return new Grid(this.rows);
  }
  setCell(rowIndex, columnIndex, value) {
    this.rows[rowIndex][columnIndex] = value;
  }
  toString() {
    return toString(this.rows);
  }
  print() {
    console.log(this.toString());
  }
  getBoxValues(boxId) {
    const values = [];
    const boxRowOffset = Math.floor(boxId / 3) * 3;
    const boxColumnOffset = (boxId - boxRowOffset) * 3;
    for (let boxRowIndex = 0; boxRowIndex < 3; boxRowIndex++) {
      for (let boxColumnIndex = 0; boxColumnIndex < 3; boxColumnIndex++) {
        const value = this.rows[boxRowOffset + boxRowIndex][
          boxColumnOffset + boxColumnIndex
        ];
        if (value !== 0) values.push(value);
      }
    }
    return values;
  }
  getGuessableCoordinates() {
    let freeRowIndex;
    let freeColumnIndex;
    this.rows.some((row, rowIndex) => {
      freeRowIndex = rowIndex;
      return row.some((column, columnIndex) => {
        freeColumnIndex = columnIndex;
        return this.isCellFree(rowIndex, columnIndex);
      });
    });
    return [freeRowIndex, freeColumnIndex];
  }
  getRowValues(rowIndex) {
    return this.rows[rowIndex].filter(v => v !== 0);
  }
  getColumnValues(columnIndex) {
    const values = [];
    this.rows.map(row => {
      const value = row[columnIndex];
      if (value !== 0) values.push(value);
    });
    return values;
  }
  isComplete() {
    return this.rows.every(row => row.every(value => value !== 0));
  }
  isValid() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].every(
      index =>
        !hasDuplicates(this.getRowValues(index)) &&
        !hasDuplicates(this.getBoxValues(index)) &&
        !hasDuplicates(this.getColumnValues(index))
    );
  }
  isCellFree(rowIndex, columnIndex) {
    return this.rows[rowIndex][columnIndex] === 0;
  }
}

module.exports = Grid;
