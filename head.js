const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual(2, 2);
// assertEqual("LighthouseLabs", "Bootcamp");

//The head function should not return the first element as an array,
//it should simply return the element itself.
const head = function (array) {
  const _ = require("lodash");
  let output = _.head(array);
  return output;
};

assertEqual(head(["Mr", "Rogers", "Neighbourhood"]), "Mr");
