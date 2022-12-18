// p: number, number
// r: array

function findMultiples(base,limit) {
    // create an array to store multiples
    let array = [];
    // loop up towards the limit, including the limit
    for(let i=base; i<=limit; i+=base) {
        // if a number is divisible by the base, it is a multiple of the base
        if(i%base==0) {
            // send the number to the array
            array.push(i);
        }
    }
    // return the array
    return array;
}

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])