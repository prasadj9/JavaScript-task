// Memoization is a technique that allows you to cache the results of a function
// so that it can be retrieved quickly when the function is called again with the same arguments.

let count = 0;
for (let i = 0; i <= 10000; i++) {
  count++;
}

//memoize function
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let start = performance.now(); //start calculating time
    //check if  result is already in cache
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      let end = performance.now(); //stop calculating time
      console.log("Time : ", end - start);
      return cache.get(key);
    }

    //Call original function and store result in cache
    const result = fn(...args);
    cache.set(key, result);
    let end = performance.now(); //stop calculating time
    console.log("Time : ", end - start);
    return result;
  };
}

//Fibonacci function
function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

//Memoize function
const memoizeFibo = memoize(fibo);

//Calls with same argument will return cached result
console.log("First time calling(10) : ");
console.log(memoizeFibo(10));
console.log("second time calling with same args: ");
console.log(memoizeFibo(10));
console.log();
console.log("First time calling(15) : ");
console.log(memoizeFibo(15));
console.log("Second time calling with same args: ");
console.log(memoizeFibo(15));