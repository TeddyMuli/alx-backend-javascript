const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('check calculate function with different types of calculations', () => {
  it('should add the rounded numbers corrcetly', () => {
    assert.strictEqual(calculateNumber('SUM', 1.49, 2.49), 3);
  })
  it('should substract the rounded numbers corrcetly', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.49, 2.49), -1);
  })
  it('should divide the rounded numbers corrcetly', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.49, 2.49), 0.5);
  });
});
