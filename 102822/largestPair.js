// p: arr
// r: num

function largestPairSum(arr) {
    // don't mutate input
    // sort new array
    const arr2 = [...arr].sort((a,b)=>b-a);
    // sum the largest two in the array (first or last two elements)
    // return the sum
    return arr2[0]+arr2[1];
}


console.log(largestPairSum([10,14,2,23,19], 42));
console.log(largestPairSum([-100,-29,-24,-19,19], 0));
console.log(largestPairSum([1,2,3,4,6,-1,2], 10));
console.log(largestPairSum([-10, -8, -16, -18, -19], -18));