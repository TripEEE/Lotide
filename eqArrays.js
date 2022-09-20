const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual(2, 2);
// assertEqual("LighthouseLabs", "Bootcamp");

//create a function, eqArrays, which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  return checkArrays
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))