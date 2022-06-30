

//p: num
//r: boolean

function isPowerOfTwo(num) {
    let exp = 0;
    let product = 0;
    while(product <= num) {
        product = Math.pow(2,exp);
        if(product === num) {
            return true;
        }
        exp++;
    }
    return false;
}

// function isPowerOfTwo(num) {
//     // raise two to a power and check if it matches num
//     // if it matches num, return true, if it doesn't, set 
// }


console.log(isPowerOfTwo(2)); // true)
console.log(isPowerOfTwo(4096)); // true)
console.log(isPowerOfTwo(5)); // false)
