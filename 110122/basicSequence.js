// p: number
// r: array


function sumOfN(n) {
    // create a variable that holds sum
    let sum = 0;
    let result = [0];
    // loop as many times as input specifies
    for(let i= n>=0 ? 1 : -1; n>=0 ?i<=n : i>=n; n>=0 ? i++ : i--) {
        // sum indexes
        result.push(sum += i);
    }
    // return the result
    return result;
}

console.log(sumOfN(3), [0, 1, 3, 6]); 
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);  
console.log(sumOfN(1), [0, 1]);    
console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);