let arr = [1, 2, 3, 4, 5];
arr.push(6); //[1, 2, 3, 4, 5, 6]
arr.pop(); // [ 1, 2, 3, 4, 5 ]
arr.shift(); //[ 2, 3, 4, 5 ]
arr.unshift(1); //[ 1, 2, 3, 4, 5 ]

console.log(arr);

//Merge 2 or more arr
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log("combined : " , combined); //[ 1, 2, 3, 4 ]

//Join - Join all elements of an array into a string, with an optional separator.
let joined = combined.join("-");
console.log("joined : " , joined); //1-2-3-4

//Slice - Return a shallow copy of a portion of an array, from a start index to an end index.
let sliced = arr.slice(1, 3);
console.log("sliced : " , sliced); //[ 2, 3 ]

//Splice - adds and/or removes array elements. modifies existing array
combined.splice(2, 1, 6);
console.log("Combined : " , combined); //[1, 2, 6, 4] (removes 3, inserts 6 at index 2)

//forEach - Iterate over each element in an array and execute a function for each element.
// arr.forEach((num) => console.log(num)); //1, 2, 3, 4, 5

//map - Create a new array with the results of calling a function on every element in the array.
let squared = arr.map(num => num * num)
console.log("squared : " , squared);

//filter - The filter() method creates a new array containing elements that satisfy a specified condition.
let evenNums = arr.filter(num => num % 2 === 0)
console.log("evenNums : " , evenNums);

//reduce - Apply a function to accumulate a single value from the array
let sum = arr.reduce((acc, num) => acc + num);
console.log("Sum : " , sum);

//find : returns the first item that meets a specific condition you provide.
let found = arr.find(num => num > 2);
console.log("found : " , found);

//indexOf - Return the first index at which a given element is found in the array, or -1 if it is not found.
let index = arr.indexOf(3);
console.log("index : " , index);

//sort 
let arr3 = [2, 1, 4, 3];
arr3.sort();
console.log("Sort : " , arr3);

//reverse
arr3.reverse();
console.log("Reverse : " , arr3);

//every - check whether all the elements of the array satisfy the given condition or not.
let nums = [6, 1, 8, 32, 35];
let isAllOdd =  nums.every(num => num % 2 === 1);
console.log("isAllOdd : " , isAllOdd);

//some - check whether at least one of the elements of the array satisfies the given condition or not.

let isSomeOdd = nums.some(num => num % 2 === 1);
console.log("isSomeOdd : " , isSomeOdd);
