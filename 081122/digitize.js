

//p: num
//r: array

function digitize(n) {
    // num => string => array
    return n.toString().split('').map(n => +n);
}

console.log(digitize(123)); // [1,2,3])
console.log(digitize(1)); // [1])
console.log(digitize(0)); // [0])
console.log(digitize(1230)); // [1,2,3, 0])
console.log(digitize(8675309)); // [8,6,7,5,3,0,9])
