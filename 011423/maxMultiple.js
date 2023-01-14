// P: num, num
// r: num

function maxMultiple(divisor, bound) {
    // increase divisor by itself until it is equal to bound or less
    let result = divisor;
    while(result<=bound-divisor) {
        result+=divisor
    }
    return result;
}

console.log(maxMultiple(2,7),6);
console.log(maxMultiple(3,10),9);
console.log(maxMultiple(7,17),14);
console.log(maxMultiple(10,50),50);
console.log(maxMultiple(37,200),185);
console.log(maxMultiple(7,100),98);