

//p: array
//r: num

function uniqueSum(list) {
    // don't mutate input
    let input = list;
    let test = [...new Set(list)];
    // remove duplicates or create new array of unique values
    let unique = [];
    for(let i=0; i<input.length; i++) {
        if(unique.includes(input[i]) === false) {
            unique.push(input[i]);
        }
    }
    // reduce over array and return
    return list.length === 0 ? null : unique.reduce((accum, current) => accum + current, 0);
}

// function uniqueSum(list) {
//     // don't mutate input, create a set from input values to remove duplicates
//     let unique = [...new Set(list)];
//     // reduce over array and return
//     return list.length === 0 ? null : unique.reduce((accum, current) => accum + current, 0);
// }

console.log(uniqueSum([1,2,3])) //, 6)
console.log(uniqueSum([1,3,8,1,8])) //, 12)
console.log(uniqueSum([-1,-1,5,2,-7])) //, -1)
console.log(uniqueSum([])) //, null)
