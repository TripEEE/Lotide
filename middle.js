const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  if(checkArrays) {
    return 'The two arrays are equal!'
  } else {
    return 'The two arrays are NOT equal!'
  }
}

//Implement middle function which will take in an array and return the middle most elements of the given array.
//If there is only one or two elements in the array, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

//PSEUDOCODE:
//Loop through the array using a for of loop
//divide the arr.length by 2, and whatever index it happens to be, assign it to a variable
//return that index as an array


const middle = function(array) {
  let middleIndex
  for(let i = 0; i < array.length; i++) {
    if(array.length <= 2) {
      middleIndex = []
    } else if(array.length % 2 === 0) {
      middleIndex= [array[Math.floor((array.length -1)/2)], array[Math.floor((array.length -1)/2)] + 1]
    }
    else if(array.length % 2 !== 0) {
      middleIndex = array[Math.floor((array.length -1)/2)]
    }
  }
  return middleIndex
}
console.log(middle([1, 2]))
// console.log(eqArrays(middle()))