// ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. 
// It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.

//ES6 features
//1. let, const
let i = 10;
console.log(i);   //Output 10

const PI = 3.14;
console.log(PI);  //Output 3.14

//2.arrow functions - It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); // Output 30

//3. Multiline strings - Users can create multi-line strings by using back-ticks(`).
let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
console.log(greeting);

//4.Default Parameters
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//5. Template Literals - 
let firstName = "Prasad";
let name = `My name is ${firstName}`;
console.log(name);

//6. Destructuring Assignment -  makes it easy to extract values from arrays, or properties from objects
//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; 
console.log(a, b);

//Object Destructuring
let person = {name1: "Peter", age: 28};
let {name1, age} = person; 
console.log(name1, age);