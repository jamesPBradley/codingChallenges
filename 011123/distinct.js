// p: array
// r: array

function distinct(arr) {
    return [...new Set(arr)];
}


console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);