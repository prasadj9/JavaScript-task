function f(str) {
    let res = "";
    const freq = {};
    for(const curr of str) {
        
        if(freq[curr]) {
            freq[curr] = freq[curr]  + 1;
        }
        else {
            freq[curr] = 1;
        }
    }
    for(let [key, val] of Object.entries(freq)) {
        res += key + val;
        // console.log(key, val);
        
    }
    return res;
}

console.log(f("engineer"));