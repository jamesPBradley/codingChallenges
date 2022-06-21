
//p: array, num
//r: num

function modifiedSum(arr, pow) {
    let arrSum = arr.reduce((accum, current) => accum + current, 0);
    let productsSum = arr.map(element => element**pow).reduce((accum, current) => accum + current,0);
    return productsSum - arrSum;
}


console.log(modifiedSum([1, 2, 3], 3)) // 30); 
console.log(modifiedSum([1, 2], 5)) // 30);