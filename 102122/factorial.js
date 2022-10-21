// p: num
// r: num

function factorial(n) {
    // create a variable to increase
    let result = 1;
    // create a loop to multiply into variable
    for(let i=2; i<=n; i++) {
        result *= i;
    }
    // return product
    return result;
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);