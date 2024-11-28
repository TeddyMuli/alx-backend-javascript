const assert = require('assert');

const calculateNumber = require('./0-calcul');
const { it } = require('mocha');

describe('calculateNumber', () => {
  it('should round numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.49, 2.49), 3);
    assert.strictEqual(calculateNumber(1.59, 2.59), 5);
  });
});
