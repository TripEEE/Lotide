const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  if(checkArrays) {
    return 'The two arrays are equal!'
  } else {
    return 'The two arrays are NOT equal!'
  }
}

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays(["This", "will"],["return", "false"]))