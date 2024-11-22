//Same using async await
let is_shop_open = false;
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

function time(ms) {
  return new Promise((res, rej) => {
    if (is_shop_open) {
      setTimeout(res, ms);
    } else {
      rej("Shop is closed");
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
    await time(0);
    console.log("production has started");
    await time(2000);
    console.log("Fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
    await time(1000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log(error);
  }
}
kitchen();
