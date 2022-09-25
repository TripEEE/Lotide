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

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function (source, itemsToRemove) {
  return source.filter((num) => !itemsToRemove.includes(num));
};

console.log(eqArrays(without([1, 2, 3], [3]), [1, 3]));
