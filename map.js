// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.


const lyrics = ["Ain't", "no", "party", "like", "an", "S", "Club", "Party"]


const map = function(array, callback) {
  const results = []
  for(let item of array) {
    results.push(callback(item))
  }
  return results
}