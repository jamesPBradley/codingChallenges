//p: num
//r: array

function divisors(n) {
    // make empty arr
    let result = [];
    // loop until n, pushing anything that divides evenly into n to the array
    for(let i=2; i<n; i++) {
        if(n%i===0) {
            result.push(i);
        }
    }
    // return the array or the string
    return result.length > 0 ? result : `${n} is prime`;
}


console.log(divisors(15)); // [3, 5]);
console.log(divisors(12)); // [2, 3, 4, 6]);
console.log(divisors(13)); // "13 is prime");
