// p: array, item
// r: boolean

function include(arr,item) {
    return arr.includes(item);
}

console.log(include([1,2,3,4], 3), true )
console.log(include([1,2,4,5], 3), false)
console.log(include([], 3),        false)