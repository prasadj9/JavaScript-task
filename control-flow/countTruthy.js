function countTruthy(array) {
    count = 0;
    for (const element of array) {
        if(element) count++;
    }
    return count;
}

const array = [1, 0, 2, null, undefined];
console.log(countTruthy(array));