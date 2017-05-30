const fs = require('fs');
const Grid = require('./grid');
const solve = require('./solve');
const filename = process.argv.length > 2 ? process.argv[2] : 'sudoku.txt';

fs.readFile(filename, 'utf8', (error, content) => {
  if (error) {
    console.log(`Expected a valid input file.`);
    return;
  }
  const matrix = content
    .split('\n')
    .filter(line => line.trim() !== '' && line.charAt(0) !== '#')
    .slice(0, 9)
    .map(line => line.replace(/ /g, '').split('').map(Number));

  solve(new Grid(matrix));
});
