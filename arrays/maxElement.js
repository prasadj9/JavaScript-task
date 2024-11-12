const numbers = [1, 6, 3, 8, 5];

const max = getMax(numbers);
console.log(max);

//Solution 1
// function getMax(array) {
//     if(array.length === 0) return undefined;

//     let max = -Infinity;
//     for(let element of array) {
//         max = Math.max(element, max);
//     }

//     return max;
// }

//Solution 2
function getMax(array) {
    if(array.length === 0)
        return undefined;
    return array.reduce((max, curr) => (curr > max ? curr : max), 0);
}