// An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types
const a = [1, 2, 3, 4, 5]

//Add elements
//end
a.push(6, 7);

//beginning
a.unshift(0);

//middle
a.splice(2, 0, 10); //at position 2 
console.log(a);


//Find elements of primitive types
const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(2), numbers.indexOf(7)); // returns index pos of element, -1 if doesn't exists
console.log(numbers.includes(3)); //return true if element found otherwise false

//find elements of reference data types
const courses = [
    {id : 1, name : 'a'},
    {id : 2, name : 'b'},
]

const course = courses.find(function(course) {
    return course.name === 'a';
})
console.log(course); //{id : 1, name : 'a'}

//Remove elements
//last
const last = numbers.pop();
console.log(last);

//start
const first = numbers.shift();
console.log(first);

//middle
numbers.splice(2, 1); // remove 1 element from index 1

//emptying array
//method 1
//numbers = []
//method 2
//numbers.length = 0
//method 3
//numbers.splice(0, numbers.length)

//combine arrays
const one = [1, 2];
const two = [3, 4];
const combined = one.concat(two);
const usingSpread = [...one, ...two];
console.log(combined, usingSpread);

//every method
const allPositive = numbers.every((value) => value >= 0); // check if all elements in array is positive
console.log(allPositive); // returns true if all numbers are positive

//some method // Checks if atleast one element matches condition
const atLeastOnePositive =  numbers.some((value) => value >= 0);
console.log(atLeastOnePositive); // returns true if atleast one number is positive

