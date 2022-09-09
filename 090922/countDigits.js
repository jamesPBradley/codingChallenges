//p: number
//r: number

function digits(num) {
    // make input a string or array and return the length;
    return num.toString().length;
}

console.log(digits(5), 1, "Fail!");
console.log(digits(12345), 5, "Fail!");
console.log(digits(9876543210), 10, "Fail!");