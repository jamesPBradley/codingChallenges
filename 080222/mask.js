//p: string
//r: string

function maskify(str) {
    // loop through string, pushing # for each char except last 4
    let result = '';
    for(let i=0; i<str.length-4; i++) {
        result += '#';
    }
    // return result combined with last for items in the string
    return `${result}${str.split('').splice(-4).join('')}`
}

console.log(maskify('4556364607935616')); // '############5616');
console.log(maskify('1')); // '1');
console.log(maskify('11111')); // '#1111');
