function job() {
    return new Promise((res, rej) => {
        rej();
    })
}

let promise = job();
promise
.then(() => {
    console.log("Success 1");
})
.then(() => {
    console.log("Success 2");
})
.then(() => {
    console.log("Success 3");
})
.catch(() => {
    console.log("Error 1");
})
.then(() => {
    console.log("Success 4");
})