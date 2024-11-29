/*JavaScript provides three methods for manipulating the this keyword in functions: call(), apply(), 
and bind(). These methods allow you to change the context of the this keyword, which can be useful 
for controlling the behaviour of functions.

*/

//Call
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  let person = {
    name: "John"
  };
  
  greet.call(person, "Alice");

  //apply
  function add(a, b) {
    return a + b;
  }
  
  let numbers = [1, 2];
  
  console.log(add.apply(null, numbers)); // Output: 3

  //bind
  let person3 = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  let greetPerson = person3.greet.bind(person3);
  
  greetPerson(); // Output: Hello, my name is John.

const n = [1, 2, 3, 4, 6];
const n2 = [8, 9];
n.push.apply(n, n2); // concat array using apply
console.log(Math.max.apply(null, n)); //max element in array using apply
