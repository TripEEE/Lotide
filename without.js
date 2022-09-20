const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  if(checkArrays) {
    return 'The two arrays are equal!'
  } else {
    return 'The two arrays are NOT equal!'
  }
}

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  const _ = require("lodash")
  const removeElements = _.without(source, itemsToRemove)
  return removeElements
}

console.log(eqArrays(without([1, 2, 3], 3), [1, 3]))