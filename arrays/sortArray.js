const numbers = [2, 3, 1];
console.log(numbers);

numbers.sort(); //ascending
console.log(numbers); 
numbers.reverse(); //descending
console.log(numbers);

//For objects
const courses = [
    {id : 1, name : 'Node.js'},
    {id : 2, name : 'javascript'},
]

courses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;

});
console.log(courses);
