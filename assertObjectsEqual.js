//WHEN ASSERTING OBJECTS COPY ALL OF THIS CODE.

const _  = require("lodash")

const eqArrays = function(array1, array2) {
  return _.isEqual(array1, array2)
}

const ab = {a: "1", b: "2"}
const ba = {b: "2", a: "1"}
const abc = {a: "1", b: "2", c: "3"}

const abArray = {a: [1, 2], b: "5"}
const baArray = {b: "5", a: [1, 2]}
const abcArray = {a: [1, 2], b: "5", c: [5, 6, 7]}

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {//if the length of both arrays are not equal
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

const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect
  const checkObjects = eqObjects(actualObj, expectedObj)
  if(checkObjects) {
    console.log(`❤️❤️❤️  Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`)
  } else {
    console.log(`🥹🥹🥹  Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`)
  }
}

assertObjectsEqual(abArray, baArray)
assertObjectsEqual(abArray, abcArray)