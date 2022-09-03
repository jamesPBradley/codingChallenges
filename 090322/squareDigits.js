//p: num
//r: num

// function squareDigits(n) {
//     // separate digits into an array
//     let arr = n.toString().split('');
//     // square each digit in the array
//     let squared = arr.map(n => (+n)**2)
//     // concatenate the numbers together
//     return +squared.join('')
// }

function squareDigits(n) {
    // separate digits into an array
    let arr = n.toString().split('');
    // square each digit in the array
    // concatenate the numbers together
    return +arr.map(n => (+n)**2).join('')
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);