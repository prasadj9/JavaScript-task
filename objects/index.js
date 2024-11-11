//JavaScript object is a variable that can store multiple data in key-value pairs.
//All functions in js are objects

//Object example
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {
        console.log('Draw');
    }
}

circle.draw();

//Object iteration
for(let key in circle) {
    console.log(key, circle[key]);
}

for(let [key, value] of Object.entries(circle)) {
    console.log(key, value);
    
}