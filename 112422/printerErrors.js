// p: string
// r: string

function printerError(str) {
    // create a variable holding available color string
    const colors = 'abcdefghijklm';
    // create a variable counting errors
    let errors = 0;
    // loop through input, count errors
    for(let i=0; i<str.length; i++) {
        if(colors.includes(str[i])===false) {
            errors++;
        }
    }
    // return error ratio as a string
    return `${errors}/${str.length}`;
}


console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")
console.log(printerError("aaabbbbhaijjjm"), "0/14")
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"), "8/22")