// p: array
// r: array

function incrementer(arr) {
    // create new array
    let result = [];
    // loop through input
    for(let i=0; i<arr.length; i++) {
        // increase element by its index
        let value = arr[i]+i+1;
        // if element is multiple decimal places, use the value in the ones place
        result.push(value < 10 ? value : value%10);
    }
    // return result
    return result;
}

console.log(incrementer([], []));
console.log(incrementer([1, 2, 3], [2, 4, 6]));
console.log(incrementer([4, 6, 7, 1, 3], [5, 8, 0, 5, 8]));
console.log(incrementer([3, 6, 9, 8, 9], [4, 8, 2, 2, 4]));
