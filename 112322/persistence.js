// p: number
// r: number

function persistence(n) {
    // create a variable holding number of loops
    let iterations = 0;
    // hold multiplicative persistence
    let value = n;
    while(value>=10) {
        // make input an array
        let arr = value.toString().split('');
        // multiply elements and repeat if produce is not less than 10
        value = arr.reduce((a,c)=>a*c,1);
        // increase loop count
        iterations++;
    }
    // return loop count
    return iterations;
}

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);