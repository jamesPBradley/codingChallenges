// p: array
// r: array

function nums(arr) {
    return arr ? arr.sort((a,b)=>a-b) : [];
}

console.log(nums([1,2,3,10,5]), [1,2,3,5,10])
console.log(nums(null), [])
console.log(nums([]), [])
console.log(nums([20, 2, 10]), [2,10,20])
console.log(nums([2, 20, 10]), [2,10,20])