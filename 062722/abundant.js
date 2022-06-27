//p: num
//r: boolean

function abundantNumber(num) {
    // create a loop up to num (exclusive), check if all nums evenly go into max, add them to new array
    let divisors = 0;
    for(let i=0; i<num; i++) {
        if(num%i === 0) {
            divisors += i;
        }
    }
    // if array sum > 12, true otherwise false
    return divisors > num;
}

// function abundantNumber(num) {
//     // create a loop up to num (exclusive), check if all nums evenly go into max, add them to new array
//     let divisors = [];
//     for(let i=0; i<num; i++) {
//         if(num%i === 0) {
//             divisors.push(i);
//         }
//     }
//     // if array sum > 12, true otherwise false
//     return divisors.reduce((accum, current) => accum + current, 0) > num;
// }


console.log(abundantNumber(18)) // true);
console.log(abundantNumber(37)) // false);
console.log(abundantNumber(120)) // true);
console.log(abundantNumber(77)) // false);
