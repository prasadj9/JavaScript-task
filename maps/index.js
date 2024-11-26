// A Map holds key-value pairs where the keys are unique and can be any datatype((objects, functions, primitive values)).
// A Map remembers the original insertion order of the keys.

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap);
console.log(myMap.size);

console.log(myMap.get("name"));

console.log(myMap.has('age'));

console.log(myMap.delete('age'));
console.log(myMap);

myMap.clear();
console.log(myMap);

myMap.set('name', 'Alice').set('age', 25);
myMap.forEach((value, key) => console.log(key + " : " + value))
 
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits);

for(const key of fruits.keys()){ //same for values and entries
    console.log(key);   
}