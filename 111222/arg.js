// p: any data type
// r: boolean

// place all values an array
function numbers(...input) {
    // if every value type is number, return true
    return input.every(e=> typeof e === 'number');
}

console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, "a", 3)); // false
console.log(numbers(1, 3, NaN)); // true