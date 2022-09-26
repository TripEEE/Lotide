// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays.js')

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});