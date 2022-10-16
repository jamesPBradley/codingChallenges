//p: string
//r: string

function solve(str) {
    // don't mutate input
    // upper and lowercase alphabet variables
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = upper.toLowerCase('');
    // make string an array and create two variables filtering for upper and lowercase
    // return length of each arr
    let lowerCount = str.split('').filter(e=>lower.includes(e)).length;
    let upperCount = str.split('').filter(e=>upper.includes(e)).length;
    // act on string accordingly and return
    return lowerCount >= upperCount ? str.toLowerCase() : str.toUpperCase();
}

console.log(solve("code"),"code");
console.log(solve("CODe"),"CODE");
console.log(solve("COde"),"code");
console.log(solve("Code"),"code");