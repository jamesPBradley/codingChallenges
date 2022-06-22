//p: nums
//r: num

function cubeSum(n, m) {
    let nums = [];
    let i=Math.min(n,m)+1;
    while(i<=Math.max(n,m)) {
        nums.push(i);
        i++;
    }
    return nums.reduce((accum, current) => accum + current**3,0);
}


console.log(cubeSum(5, 0)) // 225, "cubeSum(5,0)");
console.log(cubeSum(2, 3)) // 27, "cubeSum(2,3)");
