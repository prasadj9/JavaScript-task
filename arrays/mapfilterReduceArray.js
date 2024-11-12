const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

// const items = filtered.map(n => '<li>' + n + '<li/>');
// console.log(items);

// const html = '<u1>' +  items.join("") + '</u1>';
// console.log(html);

const items = filtered.map(n => ({value : n})) // If returning a object put parenthesis because javascript will think it is code block and return undefined

console.log(items);

//reduce
const sum = numbers.reduce((acc, val) => acc + val);
console.log(sum);
