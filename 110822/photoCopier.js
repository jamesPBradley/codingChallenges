// p: string
// r: string

function broken(str) {
    return str
            // make an array
              .split('')
            // create a new array with elements added via conditional
              .map(e => e=='1' ? '0' : '1')
            // make a string from the new array
              .join('');
}

console.log(broken("1"), "0");
console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
console.log(broken("100010"), "011101");