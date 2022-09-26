//p: string
//r: string

// function catMouse(str) {
//     // find index of C and m
//     const C = str.indexOf('C');
//     const m = str.indexOf('m');
//     // calculate the difference
//     // conditionally return a string
//     return m-1 - C <= 3 ? 'Caught!' : 'Escaped!';
// }

function catMouse(str) {
    return str.indexOf('m')-1-str.indexOf('C') <= 3 ? 'Caught!' : 'Escaped!';
}

console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C...m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");