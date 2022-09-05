//p: string
//r: string

function sortGiftCode(str) {
    // make str an arr
    // use sort method
    // make arr a str
    // return str
    return str.split('').sort().join('');

}

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');