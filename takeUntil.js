const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function(array1, array2) {
  let checkArrays = true
  if(array1.length !== array2.length) {
    checkArrays = false
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      checkArrays = false
    }
  }
  if(checkArrays) {
    console.log(`❤️❤️❤️  Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🥹🥹🥹  Assertion Failed: ${array1} === ${array2}`)
  }
}

//Create a function called takeUntil
//It will take in 2 parameters
  //The array to work with
  //the callback(which Lodash calls "predicate")

//The function will return a slice of the array with elements taken from the beginning.
//It should keep going through the array until the callback/predicate returns a truthy value
//To keep things simple, the callback should only be provided one value: The item in the array.

//PSEUDOCODE:
// create an empty variable as an expected output
//use .takeWhile() as the callback, wit

//INPUT:

const takeUntil = function(array, callback) {
  const output = []
  for(const item of array) {
    const status = callback(item)//x on line 49 now represents item, which represents the value of an element in an array
    if(status) {
      return output
    }

    output.push(item)
  }
  return output
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]
const results1 = takeUntil(data1, x => x < 0)
console.log(results1)

console.log('---------')


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',')
console.log(results2)


//EXPECTED OUTPUT:

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


