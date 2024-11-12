const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const a = [];
    for(let i = min; i <= max; i++) {
        a.push(i);
    }
    return a;
}
