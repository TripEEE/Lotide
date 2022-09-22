const _ = require("lodash")

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
    return actual === expected
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected
  }
};

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//When values in the objects are primitive, two objects are equal when:
//  They have the same number of keys
//  The value for each key in one object is the same as the value for that same key in the other object

const ab = {a: "1", b: "2"}
const ba = {b: "2", a: "1"}
const abc = {a: "1", b: "2", c: "3"}

const eqArrays = function(array1, array2) {
  return _.isEqual(array1, array2)
}

// const eqObjects = function(object1, object2) {
//   if(Object.keys(object1).length !== Object.keys(object2).length) {
//     return false
//   }
//   for(let key in object1) {
//       if(object1[key] !== object2[key]){
//         return false
//       }
//     }
//   return true
// };

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for(let key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) { //if both objects have arrays as key values
      if(eqArrays(object1[key], object2[key]) !== true) {//and the arrays are not equal
        return false
      }
    } else if(object1[key] !== object2[key]) {//if key values(not arrays) are not equal
      return false//return false
    }
  }
  return true//otherwise return true
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2), false); // => false


// assertEqual(eqObjects(ab, ba), true)
// assertEqual(eqObjects(ab, ba), true)
// assertEqual(eqObjects(abc, ba), false)