const cellToBox = require('./cell-to-box');

describe('cells of first box', () => {
  it('should return the first box', () => {
    expect(cellToBox(0, 0)).toBe(0);
    expect(cellToBox(0, 1)).toBe(0);
    expect(cellToBox(0, 2)).toBe(0);
    expect(cellToBox(1, 0)).toBe(0);
    expect(cellToBox(1, 1)).toBe(0);
    expect(cellToBox(1, 2)).toBe(0);
    expect(cellToBox(2, 0)).toBe(0);
    expect(cellToBox(2, 1)).toBe(0);
    expect(cellToBox(2, 2)).toBe(0);
  });
});

describe('cells of second box', () => {
  it('should return the second box', () => {
    expect(cellToBox(0, 3)).toBe(1);
    expect(cellToBox(0, 4)).toBe(1);
    expect(cellToBox(0, 5)).toBe(1);
    expect(cellToBox(1, 3)).toBe(1);
    expect(cellToBox(1, 4)).toBe(1);
    expect(cellToBox(1, 5)).toBe(1);
    expect(cellToBox(2, 3)).toBe(1);
    expect(cellToBox(2, 4)).toBe(1);
    expect(cellToBox(2, 5)).toBe(1);
  });
});

describe('cells of third box', () => {
  it('should return the third box', () => {
    expect(cellToBox(0, 6)).toBe(2);
    expect(cellToBox(0, 7)).toBe(2);
    expect(cellToBox(0, 8)).toBe(2);
    expect(cellToBox(1, 6)).toBe(2);
    expect(cellToBox(1, 7)).toBe(2);
    expect(cellToBox(1, 8)).toBe(2);
    expect(cellToBox(2, 6)).toBe(2);
    expect(cellToBox(2, 7)).toBe(2);
    expect(cellToBox(2, 8)).toBe(2);
  });
});

describe('cells of fourth box', () => {
  it('should return the fourth box', () => {
    expect(cellToBox(3, 0)).toBe(3);
    expect(cellToBox(3, 1)).toBe(3);
    expect(cellToBox(3, 2)).toBe(3);
    expect(cellToBox(4, 0)).toBe(3);
    expect(cellToBox(4, 1)).toBe(3);
    expect(cellToBox(4, 2)).toBe(3);
    expect(cellToBox(5, 0)).toBe(3);
    expect(cellToBox(5, 1)).toBe(3);
    expect(cellToBox(5, 2)).toBe(3);
  });
});

describe('cells of fifth box', () => {
  it('should return the fifth box', () => {
    expect(cellToBox(3, 3)).toBe(4);
    expect(cellToBox(3, 4)).toBe(4);
    expect(cellToBox(3, 5)).toBe(4);
    expect(cellToBox(4, 3)).toBe(4);
    expect(cellToBox(4, 4)).toBe(4);
    expect(cellToBox(4, 5)).toBe(4);
    expect(cellToBox(5, 3)).toBe(4);
    expect(cellToBox(5, 4)).toBe(4);
    expect(cellToBox(5, 5)).toBe(4);
  });
});

describe('cells of sixth box', () => {
  it('should return the sixth box', () => {
    expect(cellToBox(3, 6)).toBe(5);
    expect(cellToBox(3, 7)).toBe(5);
    expect(cellToBox(3, 8)).toBe(5);
    expect(cellToBox(4, 6)).toBe(5);
    expect(cellToBox(4, 7)).toBe(5);
    expect(cellToBox(4, 8)).toBe(5);
    expect(cellToBox(5, 6)).toBe(5);
    expect(cellToBox(5, 7)).toBe(5);
    expect(cellToBox(5, 8)).toBe(5);
  });
});

describe('cells of seventh box', () => {
  it('should return the seventh box', () => {
    expect(cellToBox(6, 0)).toBe(6);
    expect(cellToBox(6, 1)).toBe(6);
    expect(cellToBox(6, 2)).toBe(6);
    expect(cellToBox(7, 0)).toBe(6);
    expect(cellToBox(7, 1)).toBe(6);
    expect(cellToBox(7, 2)).toBe(6);
    expect(cellToBox(8, 0)).toBe(6);
    expect(cellToBox(8, 1)).toBe(6);
    expect(cellToBox(8, 2)).toBe(6);
  });
});

describe('cells of eigth box', () => {
  it('should return the eigth box', () => {
    expect(cellToBox(6, 3)).toBe(7);
    expect(cellToBox(6, 4)).toBe(7);
    expect(cellToBox(6, 5)).toBe(7);
    expect(cellToBox(7, 3)).toBe(7);
    expect(cellToBox(7, 4)).toBe(7);
    expect(cellToBox(7, 5)).toBe(7);
    expect(cellToBox(8, 3)).toBe(7);
    expect(cellToBox(8, 4)).toBe(7);
    expect(cellToBox(8, 5)).toBe(7);
  });
});

describe('cells of ninth box', () => {
  it('should return the ninth box', () => {
    expect(cellToBox(6, 6)).toBe(8);
    expect(cellToBox(6, 7)).toBe(8);
    expect(cellToBox(6, 8)).toBe(8);
    expect(cellToBox(7, 6)).toBe(8);
    expect(cellToBox(7, 7)).toBe(8);
    expect(cellToBox(7, 8)).toBe(8);
    expect(cellToBox(8, 6)).toBe(8);
    expect(cellToBox(8, 7)).toBe(8);
    expect(cellToBox(8, 8)).toBe(8);
  });
});
