// two sum is that you have a list or an array of numbers and a target sum to hit. 
// You're looking to return the indexes of the two numbers that when added together hit the target sum. 
// There should only be one solution to the problem from the list of numbers and a number can not be used twice.

// array = [1, 3, 10, 11, 14]
// goal = 13
//Output = [1, 2]

//First Solution : 
//Use two for loops and add them 
//Since index number should not be same second loop starts from (i + 1)
//If sum is equal to goal return the indexes of the numbers
function twoSum(arr, goal) {
    let indexes = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if(sum === goal) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
}

//Solution 2 :  optimised
//Use object or map to store indexes of numbers since we need to return index of numbers
//Then iterate through each element of array 
//Two sum : Goal = A + B 
//We will consider current element to be first number of two sum
//Then we have to find the (Goal - B) number i.e. target number
//Map will find the index of target number in O(1) time 
//If there is no target number in map, we will move to next number
//Above steps repeat.
function twoSum2(arr, goal) {
    const map = {};
    const indexes = [];
    
    for(let i = 0; i < arr.length; i++){
        let target = goal - arr[i];
        
        if(map[target] !== undefined) {
            indexes.push(map[target]);
            indexes.push(i);
            return indexes;
        }
        //Map index of each element
        map[arr[i]] = i;
    }
    return indexes
}

const arr = [1, 3, 10, 11, 14];
const goal = 13
console.log(twoSum2(arr, goal));
