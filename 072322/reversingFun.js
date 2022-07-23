// #Input: A string of length 1 - 1000
// #Output: A correctly reordered string.

function flipNumber(n) {
    // make string an array
    let arr = n.split('');
    let result = [];
    // iterate over array
    for(let i=0; i<n.length; i++) {
        // reverse input
        arr = arr.reverse();
        // send first element to result array
        result.push(arr[0]);
        // remove first element input 
        arr.shift();
    }
    // return a string
    return result.join('');
}

console.log(flipNumber("012")); //"201");
console.log(flipNumber("012345")); //"504132");
console.log(flipNumber("0123456789")); //"9081726354");
