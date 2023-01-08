// p: array
// r: number

function findAverage(arr) {
    return arr.length ? arr.reduce((a,c)=>a+c,0)/arr.length : 0;
}


console.log(findAverage([1,1,1]), 1);
console.log(findAverage([1,2,3]), 2);
console.log(findAverage([1,2,3,4]), 2.5);
console.log(findAverage([]), 0);