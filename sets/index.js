// A Set is a collection of unique values.
//typeof returns object: They are iterable

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet);

mySet.delete(1);
console.log(mySet);

console.log(mySet.has(2)); //true
console.log(mySet.has(1)); //false

mySet.clear();
console.log(mySet); // {}

console.log(mySet.size);

mySet.add(1).add(2).add(3).add(3);

// mySet.forEach(value => console.log(value))

//To get unique values from array
const nums = [1, 2, 3, 4, 2, 1, 3, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);