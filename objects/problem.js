//Implement This code
const calc = {
    total : 0,
    add(n) {
        this.total += n;
        return this;
    },
    sub(n) {
        this.total -= n;
        return this;
    },
    mul(n) {
        this.total *= n;
        return this;
    },
}
const res = calc.add(10).mul(5).sub(30).add(10);
console.log(res.total);
