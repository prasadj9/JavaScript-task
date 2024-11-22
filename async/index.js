/*
JavaScript is by default Synchronous [single threaded]. 
In synchronous programming, operations are performed one after the other, in sequence. 
So, basically each line of code waits for the previous one to finish before proceeding to the next.
Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. 
In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. 
This non-blocking nature helps improve performance and responsiveness, especially in web applications.
When you nest a function inside another function as an argument, that's called a callback.
*/

//sync Example
// console.log("I");
// console.log("eat");
// console.log("Ice cream");

//Async example
// console.log("I");
// setTimeout(() => {
//     console.log("eat");
// }, 2000)
// console.log("Ice cream");

// Annother example
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((res, rej) => {
    if (is_shop_open) {
      setTimeout(() => {
        res(work());
      }, time);
    } else {
      rej(console.log("Our shop is closed"));
    }
  });
};

//Promise chaining
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("end of day");
  });


//Promise : Promise is an object which represent eventual completion or failure of an asynchronous operation
//states = pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//Methods : 
// then, catch, finally
//all :  The Promise.all() method returns a single Promise from a list of promises, when all promises fulfill. If any of promise is rejected whole promise sate will be rejected
//The Promise.allSettled() method returns a single Promise from a list of promises, when all promises settel.
//The Promise.any() method returns a single Promise from a list of promises, when any promise fulfill.
// The Promise.race() method returns a Promise from a list of promises, when the faster promise settles.

