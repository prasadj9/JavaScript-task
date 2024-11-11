// 9*7*
// 5*3
// *1
// *

let star = false;
let k = 9;
for(let i = 3; i >= 0; i--) {
    let line = "";
    for(let j = i; j >= 0; j--){
        line += (star ? "*" : k);
        k--;
        star = !star;
    }
    console.log(line);
    
}
