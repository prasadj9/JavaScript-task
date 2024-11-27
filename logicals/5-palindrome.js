function reverse (str) {
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str.charAt(i);
    }
    return rev;
}

//Soln 1 - reverse string and compare it with original string
function isPalindrome(str) {
    const revStr = reverse(str);
    return revStr === str;

    //T.C. - O(N) + O(N) = O(N)
}

//Soln 2 - iterates over the first half of the string, comparing each character from the beginning
// with the corresponding character from the end. If any pair of characters don't match, it immediately
// returns false, indicating the string is not a palindrome. If all pairs match, it returns true.
function isPalindrome2(str) {
    for(let i = 0; i < Math.floor(str.length/2); i++) {
        let first = str.charAt(i);
        let last = str.charAt(str.length - i - 1);
        if(first !== last) return false;
    }
    return true;
    //T.C. - O(N/2) = O(N)
}

const str = "madam";
const result = isPalindrome2(str);
console.log(result);
