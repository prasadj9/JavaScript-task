function countCaseBruteForce(input) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] >= 'A' && input[i] <= 'Z') upperCaseCount++;
        if(input[i] >= 'a' && input[i] <= 'z') lowerCaseCount++;
    }

    console.log(`uppercase = ${upperCaseCount}, lowercase = ${lowerCaseCount}`);
}

let input = "Hello world!";
countCaseBruteForce(input);


function countCaseUsingReduce(input) {
    const result = [...input].reduce((acc, char) => {
        if(char >= 'A' && char <= 'Z') acc.upperCaseCount++;
        if(char >= 'a' && char <= 'z') acc.lowerCaseCount++;

        return acc;
    }, {upperCaseCount : 0, lowerCaseCount : 0})

    console.log(`uppercase = ${result.upperCaseCount}, lowercase = ${result.lowerCaseCount}`);
}

countCaseUsingReduce(input)