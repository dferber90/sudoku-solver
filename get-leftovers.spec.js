const getLeftovers = require('./get-leftovers');

describe('when no values are given', () => {
  it('should return all numbers', () => {
    expect(getLeftovers([])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
describe('when values are given', () => {
  it('should return the unused ones', () => {
    expect(getLeftovers([1, 5, 9])).toEqual([2, 3, 4, 6, 7, 8]);
  });
});
