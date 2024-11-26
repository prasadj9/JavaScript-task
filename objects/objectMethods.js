"use strict"
//Object assign : The Object.assign() method copies properties from one or more source objects to a target object.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

const person2 = { firstName: "Anne", lastName: "Smith" };

Object.assign(person1, person2);
console.log(person1);

const person = {
  firstName: "John",
  lastName: "Doe",
};

// Object.defineProperties(person, {
//     language : {value : "en", enumerable : true},
//     year : {value : "Hello", enumerable : true}
// })
// console.log(person);


//getter and setter
Object.defineProperty(person, "language", {
    get : function() {return this._language},
    set : function(value) {this._language = value},
    enumerable : true,
})
person.language = "en"
console.log(person.language);

//Object entries
for(let [key, value] of Object.entries(person)) {
    console.log(key + " : " + value);
    
}

//Object freeze : Frozen objects are read-only. No modification, addition or deletion of properties are allowed
// Object.freeze(person);
// person.firstName = "Prasad" //Throws error in strict mode
// console.log(person);

//The fromEntries() method creates an object from a list of key/value pairs.
const fruit = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];
let fruitObj = Object.fromEntries(fruit);
console.log(fruitObj);

//eturns the property descriptors of an object.
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);

let descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

let props = Object.getOwnPropertyNames(person);
console.log(props); //returns an array with the properties of an object.

const fruits = [
    {name : "apples", quantity : 300},
    {name : "banana", quantity : 500},
    {name : "oranges", quantity : 200},
    {name : "kiwi", quantity : 150},
]

function myCallback({quantity}) {
    return quantity > 200 ? "ok" : "low";
}

let result = Object.groupBy(fruits, myCallback)
console.log(result.low);
console.log(result.ok);

// Object.preventExtensions() allows modifications, but prevents addition of properties.

// Object.seal() allows modifications, but prevents additions and deletions of properties.

//Cloning objects
//shallow copy
// A shallow copy creates a new object or array, but it does not recursively copy nested objects or arrays.
//  Instead, it copies only the references to those nested objects or arrays. As a result, if you modify a 
//  nested object or array in the copied object, the changes will affect the original object
const original = {
    name : "John",
    address : {city : "New York", zipcode : "10001"}
}
const shallowCopy = Object.assign({}, original);
const shallowCopy2 = {...original};
shallowCopy.name = "Jane"; // Changes 'name' only in shallowCopy
shallowCopy2.address.city = "Los Angeles"  //Nested object is shared, so change affects the original
console.log(original);
console.log(shallowCopy);
console.log(shallowCopy2);

//Deep copy
// A deep copy creates a new object or array and recursively copies all objects and arrays within it. 
// This means that the new object is completely independent of the original, and changes to nested structures 
// in the copied object do not affect the original object.

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "London"
console.log(deepCopy);
