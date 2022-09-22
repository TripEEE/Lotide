const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥹🥹🥹Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and 
// return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.

//PSEUDOCODE:
//loop through the object's keys with for....in
//create a variable that is the callback value and takes in the key value
//if that that comes as true, return key as outputKey

// obj[item] = {stars: 1}
//obj[item].stars = 1, 2, 3, etc

const findKey = function(obj, callback) {
  for(const item in obj) {
    console.log(obj[item])
    const callObject = callback(obj[item])
    if(callObject) {
      return item
    }
  }
}

//EXAMPLE

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma"
//we only needed to find an object that includes the key of "stars"
//obj[item] does this