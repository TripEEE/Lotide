const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  if(checkArrays) {
    return 'The two arrays are equal!'
  } else {
    return 'The two arrays are NOT equal!'
  }
}

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array

//PSEUDOCODE:
//declare a function, flatten, with an arr as an parameter
//declare _ as a lodash

const flatten = function(arr) {
  const _ = require("lodash")
  const simpleArray = _.flatten(arr)
  return simpleArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))
