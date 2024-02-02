function arrayToList(arr) {
  // Add code.
}

function listToArray(list, arr) {
  // Add code.
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

let listOfNumbers = [2, 3, 5, 7, 11]; 
console.log(listOfNumbers[2]);
//-> 5
console.log(listOfNumbers[0]);

console.log(listOfNumbers[2-1]);



let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};