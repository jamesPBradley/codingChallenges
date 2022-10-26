// p: array
// r: array

function flatten(arr) {
    // combine each element contained in the input array
    // place them in a new array
    return arr.concat();
    return [].concat(...arr);
}

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);