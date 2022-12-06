// p: number, number
// r: number

function digPow(n,p) {
    // split number and place each digit into an array
    let arr = n.toString().split('').map(e=>+e);
    // loop through array, raising each element to an increasing power
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr[i]**p;
        p++
    }
    // sum digits in the array
    let sum = arr.reduce((a,c)=>a+c,0);
    // determine if n divides evenly into that number
    // return the divisor
    return sum%n==0 ? sum/n : -1;
}

console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(695, 2), 2)
console.log(digPow(46288, 3), 51)