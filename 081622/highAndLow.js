//p: string
//r: string

function highAndLow(s) {
    // split into arr of nums
    let arr = s.split(' ').map(e=>+e);
    // get highest and lowest in a string
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9");
console.log(highAndLow("1 2 3")); // "3 1");
