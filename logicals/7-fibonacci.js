//iterative
function fibo(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
  }
}

//recursive
function fiborec(n) {
  if (n <= 1) return n;
  return fiborec(n - 1) + fiborec(n - 2);
}

const n = 10;
// fibo(n);

//Using recursion
for (let i = 0; i < n; i++) {
  console.log(fiborec(i));
}
