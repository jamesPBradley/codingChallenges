//p: array
//r: num

function repeats(arr) {
    // set sum = 0 and increase it if the first index is the last index
    let sum = 0;
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            sum += arr[i];
            count++;
        }
        // stop once the second number is found
        if(count === 2) {
            break;
        }
    }
    return sum;
}

console.log(repeats([4,5,7,5,4,8])); //15);
console.log(repeats([9, 10, 19, 13, 19, 13])); //19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); //12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); //22);
console.log(repeats([5, 10, 19, 13, 10, 13])); //24);
