//p: arr
//r: num

function binaryArrayToNumber(arr) {
    // convert binary string to num and return
    return parseInt(arr.join(''),2);
}

console.log(binaryArrayToNumber([0,0,0,1]), 1);
console.log(binaryArrayToNumber([0,0,1,0]), 2);
console.log(binaryArrayToNumber([1,1,1,1]), 15);
console.log(binaryArrayToNumber([0,1,1,0]), 6);