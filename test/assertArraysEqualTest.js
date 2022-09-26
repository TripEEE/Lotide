const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("both arrays should be identical", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});