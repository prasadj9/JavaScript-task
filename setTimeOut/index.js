// function x() {
//   for (var i = 1; i <= 5; i++) {
//     callTimeOut(i);
//   }
// }

// function callTimeOut(i) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// x();

setInterval(() => {
    const d = new Date().toLocaleTimeString();
    document.getElementById("time").innerText = d;
}, 1000);

setTimeout(() => {
    document.getElementById("text").innerText = "I am called after 2 seconds"
}, 2000);