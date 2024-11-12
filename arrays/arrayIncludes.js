const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
    // return array.includes(searchElement);
    //without inbuilt method
    for(let element of array) 
        if(element === searchElement) return true;

    return false;
}