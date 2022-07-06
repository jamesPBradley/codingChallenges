//p: array, num
//r: string

function sumOrProduct(arr, n) {
    // don't mutate input
    let ascending = [...arr].sort((a,b) => a-b);
    let product = ascending.slice(0,n).reduce((accum,current) => accum * current, 1);
    let sum = ascending.slice(-n,ascending.length).reduce((accum,current) => accum + current, 0);
    return sum > product ? 'sum' :
           sum < product ? 'product' : 'same';
}


console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // "sum");
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)); // "product");
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3)); // "same");
