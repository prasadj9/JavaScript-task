function Q1() {
    for(let i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i* 1000)
    }
}

function Q2() {
    for(var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}

// Q2();

function Q3() {
    let i = 0;
    for( i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0)
    }
}
// Q3();