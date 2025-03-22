const obj = {
    name : "Prasad",
    age : 22
}

for(let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

function createCounters() {
    let counters = [];
    for (let i = 0; i < 3; i++) {
      counters.push(function() {
        return i;
      });
    }
    return counters;
  }
  
  const counters = createCounters();
  console.log(counters[0]());
  console.log(counters[1]());
  console.log(counters[2]());
//   Question: What will be the output of this code, and why does it happen? How can you fix it?