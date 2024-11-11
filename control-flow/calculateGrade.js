function calculateGrade(marks) {
    const avg = calculateAverage(marks);
    if(avg < 60) return 'F';
    else if(avg < 70) return 'D';
    else if( avg < 80) return 'C';
    else if(avg < 90) return 'B';
    else return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    }
    return sum/array.length;
}

const marks = [80, 80, 50];
console.log(calculateGrade(marks));