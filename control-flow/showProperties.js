function showProperties(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

const movie = {
    title : 'a',
    rating : 4.5,
    director : 'b'
}

console.log(showProperties(movie));
