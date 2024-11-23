let str = "Hello";
console.log(str.charAt(1)); // e

//charCodeAt() - Return the Unicode value of the character at a specified index.
console.log(str.charCodeAt(1)); //101

let str1 = "Hello"
let str2 = "world";
let result = str1.concat(" ",str2);
console.log(result); //Hello world

//includes() - Check if a string contains a specified substring.
let hasHello = result.includes("Hello");
console.log(hasHello); //true

//indexOf() - Return the index of the first occurrence of a specified value in a string, or -1 if not found.
let index = result.indexOf("world")
console.log(index); //6

//replace - Replace a substring with a new string.
let newStr = result.replace("world", "javascript")
console.log(newStr);

//slice() - Extract a portion of the string and return it as a new string
let sliced = result.slice(0, 5);
console.log(sliced); //Hello

//split -  Split a string into an array of substrings based on a specified separator.
let fruits = "apple,banana, orange";
let arr = fruits.split(",");
console.log(arr); //[ 'apple', 'banana', ' orange' ]

//lowercase and uppercase
let upperStr = "HELLO";
let lower = upperStr.toLowerCase();
console.log(lower);
let upper = lower.toUpperCase();
console.log(upper);

//trim - remove whitespace
let spacedStr = "  Hello World  ";
let trim = spacedStr.trim();
console.log(trim);

//startsWith, endsWith
let starts = result.startsWith("Hello");  // true
console.log(starts);
let ends = result.endsWith("world");
console.log(ends);

//repeat
let repeated = str.repeat(3);
console.log(repeated);
