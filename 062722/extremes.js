
//p: array of numbers
//r: num

function betweenExtremes(arr) {
    return Math.max(...arr) - Math.min(...arr);
}


console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42);
console.log(betweenExtremes([-1, -41, -77, -100])) // 99);
