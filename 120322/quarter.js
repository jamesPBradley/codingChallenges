// p: number
// r: number

function quarterOf(n) {
    // return number via conditional
    return n <= 3 ? 1 :
           n <= 6 ? 2 :
           n <= 9 ? 3 : 4;
}

function quarterOf(n) {
    // return n divided by 4 rounded down to whole number
    return Math.ceil(n/3);
}

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)