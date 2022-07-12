
//p: array
//r: array

function averages(arr) {
    // if array length is <=1 or arr === null, return []
    if(arr === null || arr.length <= 1) {
        return [];
    }
    let result = [];
    // loop through array
    for(let i=1; i<arr.length; i++) {
        // average current element and previous element then push avg to new array
        result.push((arr[i-1] + arr[i])/2);
    }
    // return new array
    return result;
}

console.log(averages(null)); // [2, 2, 2, 2]);

console.log(averages([2, 2, 2, 2, 2])); // [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]);
