const eqArrays = require('../eqArrays.js')
const assertArraysEqual = require('../assertArraysEqual.js')

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual(["This", "will"],["return", "false"])