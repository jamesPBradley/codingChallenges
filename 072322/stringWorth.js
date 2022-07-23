//p: string,string
//r: string

function highestValue(a,b) {
    // make strings arrays and iterate over them to get individual point indexes and sums
    const val1 = a
                  .split('')
                  .map(e => e.codePointAt(0))
                  .reduce((a,c) => a+c,0);
    const val2 = b
                  .split('')
                  .map(e => e.codePointAt(0))
                  .reduce((a,c) => a+c,0);

    // return string corresponding to highest sum
    return val1 >= val2 ? a : b;
}

console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567")); // "KkLlMmNnOoPp4567")
console.log(highestValue("ABcd", "0123")); // "ABcd")
console.log(highestValue("!\"?$%^&*()", "{}[]@~'#:;")); // "{}[]@~'#:;")
console.log(highestValue("ABCD", "DCBA")); // "ABCD")