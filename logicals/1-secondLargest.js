/*WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], without
sorting, without using any built-in methods and without deleting duplicate elements. What will be
the time complexity?
*/
function secondLargest(arr) {
  let maxNum = -Infinity;
  let secondMaxNum = -Infinity;

  for (const curr of arr) {
    if (curr > maxNum) {
      secondMaxNum = maxNum;
      maxNum = curr;
    }
    
    if(curr > secondMaxNum && curr !== maxNum) {
        secondMaxNum = curr;
    }
  }

  return secondMaxNum;
}

//Time complexity : O(N) as we are traversing array only once
//space complexity : O(1)

const arr = [12, 35, 1, 10, 34, 1];
const result = secondLargest(arr);
console.log(result);
