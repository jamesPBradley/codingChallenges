//p: num
//r: boolean

function tidyNumber(n) {
    // convert parameter to string
    let str = n.toString();
    // make an array of the digits
    // sort in ascending order and convert to string
    let sorted = n.toString().split('').sort().join('');
    // compare to original array
    return sorted == str;
}

console.log(tidyNumber(12),true);
console.log(tidyNumber(102),false);
console.log(tidyNumber(9672),false);
console.log(tidyNumber(2789),true);
console.log(tidyNumber(2335),true);