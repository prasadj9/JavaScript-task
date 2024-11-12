const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, -2);

console.log(output);

//approach : 
/*
1. copy array
2. remove the index element and store it in variable
3. use splice method to add that element to the correct index (index + offset)
*/

function move(array, index, offset) {
    const position = index + offset;
    if(position >= array.length || position < 0) {
        console.error("Invalid offset")
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}
