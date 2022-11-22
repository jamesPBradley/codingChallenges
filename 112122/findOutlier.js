// p: array
// r: number


function findOutlier(arr) {
    // determine if outlier is odd or even
    let odd = 0;
    let even = 0;
    for(let i=0; i<3; i++) {
        Math.abs(arr[i])%2===0 ? even++ : odd++;
    }
    // return outlier
    return odd > even ? arr.find(e=>Math.abs(e)%2===0) : arr.find(e=>Math.abs(e)%2>0);
}


console.log(findOutlier([0, -1, -2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)