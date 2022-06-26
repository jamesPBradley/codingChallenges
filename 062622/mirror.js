//p: array of numbers
//r: array of numbers

function mirror(arr) {  
    // create an array and sort it in ascending order without mutating input
    let ascend = [...arr].sort((a,b) => a-b);
    // create an array from the ascending array excluding the max value, sort it in descending order
    let descend = ascend.slice(0,-1).sort((a,b) => b-a);
    // combine the two arrays and return them if the input array length > 1
    return arr.length > 1 ? ascend.concat(descend) : arr;
}

console.log(mirror([])); // []
console.log(mirror([1])); // [1]
console.log(mirror([2, 1])); // [1, 2, 1]
console.log(mirror([2, 3, 1])); // [1, 2, 3, 2, 1]
console.log(mirror([-8, 42, 18, 0, -16])); // [-16, -8, 0, 18, 42, 18, 0, -8, -16]