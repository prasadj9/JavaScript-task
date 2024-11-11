//Factory function
//Factory function is a function that returns new object each time its called.
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);