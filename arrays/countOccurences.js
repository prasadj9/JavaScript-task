    const numbers = [1, 2, 3, 4, 1];
    const count1 = countOccurences(numbers, 1);
    const count2 = countOccurences(true, 1);

    console.log(count2, count1);
    
    // function countOccurences(array, searchElement) {
    //     let count = 0;
    //     for(let element of array) {
    //         if(element === searchElement) count++;
    //     }
    //     return count;
    // }

    //Using reduce method
    function countOccurences(array, searchElement) {
        //error handling
        try {
            if(!Array.isArray(array)) 
                throw new Error("Input should be array")
            return array.reduce((count, element) => (element === searchElement) ? count + 1 : count )
        } catch (error) {
            console.log(error.message);
            return 0;
        }
    }