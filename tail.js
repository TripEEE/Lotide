// const { tail } = require("lodash");

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  return array.pop();
};

assertEqual(tail(["Mr", "Rogers", "Neighbourhood"]), "Neighbourhood");
