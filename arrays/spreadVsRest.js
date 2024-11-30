/* 
The Spread Operator - 
The spread operator, denoted by three consecutive dots (...), is primarily used for 
expanding iterables like arrays into individual elements. This operator allows us to efficiently 
merge, copy, or pass array elements to functions without explicitly iterating through them.

The Rest Operator - 
While the spread operator expands elements, the rest operator condenses them into a single entity
within function parameters or array destructuring.
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
*/

// Spread example -
const arr = [1, 2, 3];
console.log("Original array:", arr); // [1, 2, 3]

const newArr = [5, 6, ...arr];
console.log("New array (before spread operator):", newArr);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5, 6]

function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result); // 6

//Rest exapmle -
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30