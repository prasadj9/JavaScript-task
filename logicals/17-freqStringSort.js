// find the frequency of each and every character in a string and sort it in descending
// order.
// Input: Engineer
// Output : e3n2g1i1r1


let str = "aaabbcccc";
let res = ""
let freq = {};
for(let i = 0; i < str.length; i++) {
    let curr = str.charAt(i);
    freq[curr] = (freq[curr] || 0) + 1
}

let sortedFreq = Object.entries(freq).sort((a, b) => (b[1] - a[1]))

for([key, value] of (sortedFreq)) {
    res += key + value;
}
console.log(res)