
//p: positive integer
//r: num


function halvingSum(n) {
    // loop until i/2>0
    let i = n;
    let sum = n;
    while(i/2>0) {
        sum = sum + Math.floor(i/2);
        i = i/2;
    }
    return sum;
}

console.log(halvingSum(25)); // 47);
console.log(halvingSum(127)); // 247);
