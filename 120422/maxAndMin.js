// p: array
// r: number

function min(arr) {
    // sort in ascending order and return the first value
    // return Math.min(...arr)
    return arr.sort((a,b)=>a-b)[0];
}

function max(arr) {
    // sort array in descending order and return the first value
    // return Math.max(...arr)
    return arr.sort((a,b)=>b-a)[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);