const { sortedLastIndexBy } = require("lodash")

const assertArraysEqual = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  if(checkArrays) {
    return 'The two arrays are equal!'
  } else {
    return 'The two arrays are NOT equal!'
  }
}

const eqArrays = function(array1, array2) {
  const _ = require("lodash")
  const checkArrays = _.isEqual(array1, array2)
  return checkArrays
}

// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
// string = lighthouse labs
// {l: [0, 10]
// i:[]
// }

//PSEUDOCODE:
//create a function, letter Positions, with a parameter of string
//declare a variable with a value of an empty object
//make all elements in the array lower cased and remove the empty strings
//loop through the string
//if the letter does not exist in the string, return 0
//if the letter does exist in the string, add that letter as a key to the empty object
//the value of that key should be an array. use .push to add the index of where that letter is found in the string to this array in an object
//return

const letterPositions = function(string) {
  const indexPositionsByCharacter = {}
  const lowerCase = string.toLowerCase()
  let currentIndex = 0
  for(let character of lowerCase) {
    //below block is called an early return
    if(character === " "){
      currentIndex++ //move to next index
      continue//continue to next loop
    }
    const indexesForCharacter = indexPositionsByCharacter[character]
    //                              here is the object    access key
    if(indexesForCharacter === undefined) {
      indexPositionsByCharacter[character] = []
      //above 2 lines are stating that if there a value is not found in the string, then it will add an empty array, which is the initial array where all values will be pushed to
    }
    indexPositionsByCharacter[character].push(currentIndex)
    currentIndex++
  }
  return indexPositionsByCharacter
}

//TEST
console.log(assertArraysEqual(letterPositions('Hello My Name is Evan').e, [1, 12, 17]))

// {
//   h: [ 0 ],
//   e: [ 1, 12, 17 ],
//   l: [ 2, 3 ],
//   o: [ 4 ],
//   m: [ 6, 11 ],
//   y: [ 7 ],
//   n: [ 9, 20 ],
//   a: [ 10, 19 ],
//   i: [ 14 ],
//   s: [ 15 ],
//   v: [ 18 ]
// }

