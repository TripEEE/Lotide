const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array

//PSEUDOCODE:
//declare a function, flatten, with an arr as an parameter
//declare _ as a lodash

const flatten = function (arr) {
  return arr.flat();
};

console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
