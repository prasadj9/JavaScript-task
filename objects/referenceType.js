//https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/
/*
primiive : These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. 
They are not objects, and do not have methods. Primitives are copied by value.
Examples of such data types are numbers, strings, booleans, null, and undefined.
Reference data types : These data types are dynamic in nature. They don't have fixed size.
Examples of such data types include arrays, functions, collections, and all other types of objects.
Objects are copied by reference.
*/

//primitive data type example
let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50

//Reference data type example
let object1 = {
  name: "Prasad",
  age: 22,
};
let object2 = object1;

object1.age = 20;

console.log(object2); //The value of property age of object2 is also updated to 20
//This happens because Objects are copied by reference. Here object1 and object2 both point to same object in heap memory.