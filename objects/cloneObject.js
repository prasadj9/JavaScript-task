const circle = {
    radius : 1,
    draw : function() {
        console.log('Draw');
    }
}

//Method 1
// const another = {}

// for(let key in circle) {
//     another[key]  = circle[key]
// }

//Method 2
// const another = Object.assign({}, circle)

//Method 3
const another = {...circle}
console.log(another);
