const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

//This function should take in a sentence( as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

//use lighthouse in the house as your string

//PSEUDOCODE:
//return an object, numOfLetters
//create an empty object at the top of the function
//we do not want to count spaces, and since an empty string is falsy, we make sure that whatever we add is truthy
//use a for of loop to loop through the joined variable
//if the letter appears in the index, create a key of that index
//however many instances the letter occurs, add 1 to its respective index

const countLetters = function(str) {
  const numOfLetters = {}
  const lowerCase = str.toLowerCase()
  const noSpaces = lowerCase.split(' ').join('')
  for(let letter of noSpaces) {
    if(!numOfLetters[letter]) {
      numOfLetters[letter] = 0
    }
      numOfLetters[letter]++
  }
  return numOfLetters
}

console.log(countLetters('lighthouse in the house'))
