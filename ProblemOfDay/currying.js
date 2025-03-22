function sum(a, b) {
    return a + b;
}

console.log('sum(a, b)', sum(1, 3))


//normal currying
function sum1(a) {
    return function(b) {
        return a + b;
    }
}

console.log('sum1(3)(4)', sum1(3)(4))


//infinite currying
function sum2(a) {
    return function(b) {
        if(b !== undefined) {
            return sum2(a + b);
        }
        return a;
    }
}
console.log('sum2(2)(3)(4)()', sum2(2)(3)(4)())