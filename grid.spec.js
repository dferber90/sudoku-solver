const Grid = require('./grid');

const testGrid = [
  [2, 6, 0, 0, 1, 0, 0, 3, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 8],
  [7, 1, 8, 0, 0, 0, 5, 2, 4],
  [0, 0, 5, 6, 0, 7, 4, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 6, 5, 0, 3, 1, 0, 0],
  [8, 3, 1, 0, 0, 0, 2, 4, 7],
  [5, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 9, 0, 0, 7, 0, 0, 8, 5],
];

describe('getGuessableCoordinates', () => {
  const grid = new Grid(testGrid);
  it('should get the coordinates', () => {
    expect(grid.getGuessableCoordinates()).toEqual([0, 2]);
  });
});

describe('getBoxValues', () => {
  const grid = new Grid(testGrid);
  describe('when called for box 0', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(0)).toEqual([2, 6, 3, 7, 1, 8]);
    });
  });
  describe('when called for box 1', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(1)).toEqual([1]);
    });
  });
  describe('when called for box 2', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(2)).toEqual([3, 8, 5, 2, 4]);
    });
  });
  describe('when called for box 3', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(3)).toEqual([5, 6]);
    });
  });
  describe('when called for box 4', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(4)).toEqual([6, 7, 4, 5, 3]);
    });
  });
  describe('when called for box 5', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(5)).toEqual([4, 1]);
    });
  });
  describe('when called for box 6', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(6)).toEqual([8, 3, 1, 5, 9]);
    });
  });
  describe('when called for box 7', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(7)).toEqual([7]);
    });
  });
  describe('when called for box 8', () => {
    it('should return contained values', () => {
      expect(grid.getBoxValues(8)).toEqual([2, 4, 7, 1, 8, 5]);
    });
  });
});

describe('getRowValues', () => {
  const grid = new Grid(testGrid);
  describe('when called for first row', () => {
    it('should return contained values', () => {
      expect(grid.getRowValues(0)).toEqual([2, 6, 1, 3]);
    });
  });
  describe('when called for second row', () => {
    it('should return contained values', () => {
      expect(grid.getRowValues(1)).toEqual([3, 8]);
    });
  });
  describe('when called for third row', () => {
    it('should return contained values', () => {
      expect(grid.getRowValues(2)).toEqual([7, 1, 8, 5, 2, 4]);
    });
  });
  describe('when called for fourth row', () => {
    it('should return contained values', () => {
      expect(grid.getRowValues(3)).toEqual([5, 6, 7, 4]);
    });
  });
});

describe('getColumnValues', () => {
  const grid = new Grid(testGrid);
  describe('when called for first column', () => {
    it('should return contained values', () => {
      expect(grid.getColumnValues(0)).toEqual([2, 3, 7, 8, 5]);
    });
  });
  describe('when called for second column', () => {
    it('should return contained values', () => {
      expect(grid.getColumnValues(1)).toEqual([6, 1, 3, 9]);
    });
  });
  describe('when called for third column', () => {
    it('should return contained values', () => {
      expect(grid.getColumnValues(2)).toEqual([8, 5, 6, 1]);
    });
  });
  describe('when called for fourth column', () => {
    it('should return contained values', () => {
      expect(grid.getColumnValues(3)).toEqual([6, 5]);
    });
  });
});

describe('isComplete', () => {
  describe('when grid is incomplete', () => {
    const grid = new Grid(testGrid);
    it('should return false', () => {
      expect(grid.isComplete()).toBe(false);
    });
  });
  describe('when grid is complete', () => {
    const grid = new Grid([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ]);
    it('should return true', () => {
      expect(grid.isComplete()).toBe(true);
    });
  });
});

describe('isCellFree', () => {
  const grid = new Grid(testGrid);
  describe('when cell is free', () => {
    it('should return true', () => {
      expect(grid.isCellFree(0, 2)).toBe(true);
    });
  });
  describe('when cell is taken', () => {
    it('should return false', () => {
      expect(grid.isCellFree(0, 0)).toBe(false);
    });
  });
});
