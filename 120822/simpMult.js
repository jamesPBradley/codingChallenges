// p: number
// r: number

function simpleMultiplication(n) {
    // if n is even, multiple by 8, otherwise by 9;
    return n%2==0 ? n*8 : n*9;
}

console.log(simpleMultiplication(2),16,'Should return double given argument..')
console.log(simpleMultiplication(1),9,'Should return double given argument..')
console.log(simpleMultiplication(8),64,'Should return given argument times eight...')
console.log(simpleMultiplication(4),32,'Should return given argument times eight...')
console.log(simpleMultiplication(5),45,'Should return given argument times nine...')