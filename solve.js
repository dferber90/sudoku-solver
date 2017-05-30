const { intersection, flatten, times } = require('lodash');
const getLeftovers = require('./get-leftovers');
const toString = require('./to-string');
const cellToBox = require('./cell-to-box');

const createPossibilitiesRow = () => [[], [], [], [], [], [], [], [], []];
const createPossibilitiesGrid = () => times(9, createPossibilitiesRow);

const solve = grid => {
  if (!grid.isValid()) {
    console.log('Seems like you enterd an invalid grid');
    return;
  }
  console.log('Input:');
  console.log(toString(grid.rows));
  const start = process.hrtime();
  const results = solveStep(grid);
  // divide by a million to get nano to milli
  const elapsed = process.hrtime(start)[1] / 1000000;
  const time = `${process.hrtime(start)[0]}s ${elapsed.toFixed(0)}ms`;
  const count = results.length;
  const solutions = count === 0 || count > 1 ? 'solutions' : 'solution';
  console.log(`Found ${count} ${solutions} in ${time}.`);
  results.map(([cycles, rows], i) => {
    console.log(`Solution #${i + 1} after ${cycles} cycles:`);
    console.log(toString(rows));
  });
};

const solveStep = (prevGrid, cycles = 0) => {
  if (!prevGrid.isValid()) return [];
  if (prevGrid.isComplete()) {
    return [[cycles - 1, prevGrid.rows]];
  }
  const rowLeftovers = times(9, i => getLeftovers(prevGrid.getRowValues(i)));
  const colLeftovers = times(9, i => getLeftovers(prevGrid.getColumnValues(i)));
  const boxLeftovers = times(9, i => getLeftovers(prevGrid.getBoxValues(i)));
  const grid = prevGrid.clone();
  let modified = false;
  let hasToGuess = false;
  // prepare list of modifications
  const possibilitiesGrid = createPossibilitiesGrid();
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      if (prevGrid.isCellFree(rowIndex, columnIndex)) {
        const possibilities = intersection(
          rowLeftovers[rowIndex],
          colLeftovers[columnIndex],
          boxLeftovers[cellToBox(rowIndex, columnIndex)]
        );
        if (possibilities.length === 1) {
          grid.setCell(rowIndex, columnIndex, possibilities[0]);
          modified = true;
        } else if (possibilities.length > 1) {
          possibilitiesGrid[rowIndex][columnIndex] = possibilities;
          hasToGuess = true;
        }
      }
    }
  }
  if (modified) {
    return solveStep(grid, cycles + 1);
  }
  // We have to guess when there are no easy replacements left.
  if (hasToGuess) {
    // find something we can guess and try all possibilities
    const [guessRowIndex, guessColumnIndex] = grid.getGuessableCoordinates();
    const possibleValues = possibilitiesGrid[guessRowIndex][guessColumnIndex];
    const solutions = possibleValues.map(possibleValue => {
      const nextGrid = grid.clone();
      nextGrid.setCell(guessRowIndex, guessColumnIndex, possibleValue);
      return solveStep(nextGrid, cycles + 1);
    });
    return flatten(solutions);
  }
  return [];
};

module.exports = solve;
