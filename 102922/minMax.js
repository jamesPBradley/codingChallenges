// p: array
// r: array

function minMax(arr) {
    // find max
    // find min
    // return array holding both
    return [Math.min(...arr),Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5], [1, 5]));
console.log(minMax([2334454, 5], [5, 2334454]));
console.log(minMax([5], [5, 5]));