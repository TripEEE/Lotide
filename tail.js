// const { tail } = require("lodash");

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  const _ = require("lodash");
  let output = _.tail(array);
  return output;
};

console.log(tail(["Yo yo", "lighthouse", "labs"]));
