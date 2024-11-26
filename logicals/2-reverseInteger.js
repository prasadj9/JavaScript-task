/*WAP to reverse an integer without converting it to a string, without using any built-in methods.*/

function reverseNum(n) {
    if(typeof n !== "number") return NaN;

    let result = 0;
    while(n > 0) {
        let rem = n % 10;  //take last digit
        result = (result * 10) + (rem) //Add last digit to result variable
        n = Math.floor(n / 10); //Remove last digit
    }

    return result;
}

const result = reverseNum(12345);
console.log(result);
