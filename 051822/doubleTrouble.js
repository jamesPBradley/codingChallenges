// P: array of integers, num
// R: array of integers


function breakPair(x,t) {
    let array = [...x];
    
    // loop through array
    for(let i=0; i<array.length; i++) {
    // sum nums, compare to t
        if(array[i] + array[i+1] === t) {
    //sum === t? delete right most num, decrement
            array.splice(i+1,1);
            i--;           
        }
    }

    return array;
}

console.log(breakPair([1, 3, 5, 6, 7, 4, 3],7)); // [1, 3, 5, 6, 7, 4]
console.log(breakPair([4, 1, 1, 1, 4],2)); // [4, 1, 4]
console.log(breakPair([2, 2, 2, 2, 2, 2], 4)); // [2]
console.log(breakPair([2, 6, 2], 8)); // [2, 2]