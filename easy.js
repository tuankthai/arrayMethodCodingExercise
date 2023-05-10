// Find Method: ????????
// Challenge: Find the first even number in an array.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Starter code - Add your solution here


// Sort Method:
// Challenge: Sort an array of numbers in ascending order.

const unsortedArray = [5, 3, 8, 1, 9, 2, 7, 4, 6];

// Starter code - Add your solution here
// let sortArr = unsortedArray.sort(  (a,b) => b-a)   //descending, return pos or  neg, not boolean

console.log( unsortedArray.sort((a, b) => a - b) )  //ascending, if a - b is pos, swap them

// Filter Method:
// Challenge: Filter out all the strings from an array of mixed data types.

const mixedArray = [1, 'apple', 2, 'banana', 3, 'cherry', 4, 'date'];

// Starter code - Add your solution here
// console.log(typeof('apple'))
console.log( mixedArray.filter(element  => typeof(element) === "string") )


// Reduce Method:
// Challenge: Calculate the sum of all numbers in an array.

// Starter code - Add your solution here
const numbersArray = [1, 2, 3, 4, 5];
console.log( numbersArray.reduce( (accu, curr) => accu + curr  , 0) )

// Map Method:
// Challenge: Double each number in an array.

const originalArray = [1, 2, 3, 4, 5];

// Starter code - Add your solution here
console.log( originalArray.map( item => item * 2) )

// forEach Method:
// Challenge: Print all the elements of an array.

var fruits = ['apple', 'banana', 'cherry', 'date'];

// Starter code - Add your solution here
fruits.forEach(item => console.log(item) )
