// Find Method:  ???????
// Challenge: Find the longest word in an array of strings.

var words = ['apple', 'banana','apple', 'cherry', 'date'];

// Starter code - Add your solution here
const fruitsSingle = words.find(ele=>ele=='apple')
console.log(fruitsSingle)
// Sort Method:
// Challenge: Sort an array of objects based on multiple properties.

var persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

// // Starter code - Add your solution here
persons.sort((itemx, itemy) => {
  if (itemx.name > itemy.name) {
    return 1;
  } else {
    return -1;
  }
}).sort((itemx,itemy)=>itemx.age-itemy.age)
console.log(persons)



// Filter Method:
// Challenge: Filter out all the elements that satisfy multiple conditions in an array.

const numbers = [10, 5, 25, 8, 15, 30];

// Starter code - Add your solution here
console.log ( numbers.filter(item => item > 10 && (item % 5 === 0) ) )

// Reduce Method:
// Challenge: Group objects in an array based on a specific property and calculate their total.

var products = [
  { name: 'Apple', category: 'Fruits', price: 1.5 },
  { name: 'Banana', category: 'Fruits', price: 0.75 },
  { name: 'Carrot', category: 'Vegetables', price: 0.5 },
  { name: 'Orange', category: 'Fruits', price: 1.25 },
  { name: 'Cucumber', category: 'Vegetables', price: 1 }
];

// Starter code - Add your solution here
const FRUITS = 'Fruits'
const VEG = 'Vegetables'

const fruitArr = products.filter(ele => ele.category === FRUITS).reduce((preV, curV) => {return preV+curV.price },0)
const vegArr = products.filter(ele => ele.category === VEG).reduce((preV, curV) => { return preV + curV.price }, 0)
console.log(fruitArr)
console.log(vegArr)

// Map Method:
// Challenge: Transform an array of strings into an array of objects with key-value pairs.

var fruits = ['apple', 'banana', 'cherry'];

// Starter code - Add your solution here
console.log(fruits.map((item, idx) => { return {  [idx]: item } }) )
console.log(fruits.map((item, idx) => { return {  name: item } }) )


// forEach Method:
// Challenge: Implement a custom operation on each element of an array and update the original array.

const numbersTwo = [1, 2, 3, 4, 5];

// Starter code - Add your solution here
numbersTwo.forEach((ele, idx, arr) => {
                arr[idx] = ele*2
})
console.log(numbersTwo)