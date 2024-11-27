//solution 1
function reverse(str) {
    return str.split("").reverse().join("");
}

//ssolution 2
function reverse2 (str) {
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str.charAt(i);
    }
    return rev;
}

//solution 3 - recursion
function reverse3(str) {
    if(str === "") return ""; //base 
    return reverse3(str.substring(1)) + str.charAt(0);
}

const str = "Prasad";
let result = reverse3(str);
console.log(result);
