//P: array of nums
//R: array of nums

function withoutLast(arr) {
    return arr.slice(0,-1);
}

console.log(withoutLast([1, 2, 3, 4, 5])) //[1, 2, 3, 4]
console.log(withoutLast([6, 7, 8, 9])) //[6, 7, 8]

