// Find Method:  ??????
// Challenge: Find the index of the first negative number in an array.

var numbers = [5, -2, 8, -7, 3, -4, 1];

// Starter code - Add your solution here


// Sort Method:
// Challenge: Sort an array of objects based on a specific property.

const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

// Starter code - Add your solution here
console.log(persons.sort((itemx, itemy) => itemx.age - itemy.age))

console.log(persons.sort((itemx, itemy) => {
                                              if (itemx.name > itemy.name) {
                                                return 1;
                                              } else {
                                                return -1;
                                              }
                                            } ))



// Filter Method:
// Challenge: Filter out all the elements that are greater than a given threshold in an array.

const numbersArray = [10, 5, 25, 8, 15, 30];

// Starter code - Add your solution here
console.log( numbersArray.filter(item => item % 5 === 0) )


// Reduce Method:
// Challenge: Find the average of all the numbers in an array.

const scores = [85, 90, 95, 80, 75];

// Starter code - Add your solution here

console.log( scores.reduce( 
  (accu, curr) =>  (accu + curr)     
  , 0)  / scores.length)



// Map Method:
// Challenge: Capitalize the first letter of each word in an array of strings.

const words = ['apple', 'banana', 'cherry', 'date'];

// Starter code - Add your solution here
console.log( words.map( item => item[0].toUpperCase() + item.slice(1,item.length) ) )

// forEach Method:
// Challenge: Multiply each element of an array by its index.

var numbers = [1, 2, 3, 4, 5];

// Starter code - Add your solution here
numbers.forEach( (item, idx) =>  console.log(item * idx) )
