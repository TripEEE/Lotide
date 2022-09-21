const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Instructions
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

//PSEUDOCODE:
//start with an early return, if no key exists, return undefined
//use a for in loop to access the keys in the obj
//if str = obj.[genre], return the key value

const findKeyByValue = function(obj, str) {
  let keyByInputString = ""
  for(let key in obj) {
    if(str !== obj[key]) {
      keyByInputString = undefined
    }
    (str === obj[key])
      keyByInputString = key
  }
  return keyByInputString
}

//TESTS

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);