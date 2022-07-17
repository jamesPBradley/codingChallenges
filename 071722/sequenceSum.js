
//p: three nums
//r: num

function sequenceSum(n1,n2,n3) {
    // If begin value is greater than the end, function should return 0
    // if(n1 > n3) {
    //     return 0;
    // }
    // need sum variable
    let sum = 0;
    // create loop to add to sum variable iterating via parameters
    for(let i=n1; i<=n2; i+=n3) {
        sum += i;
    }
    // return sum
    return sum;
}

// console.log(sequenceSum(3, 2, 2)); // 2)
console.log(sequenceSum(2, 2, 2)); // 2)
console.log(sequenceSum(2, 6, 2)); // 12)
console.log(sequenceSum(1, 5, 1)); // 15)
console.log(sequenceSum(1, 5, 3)); // 5)  
