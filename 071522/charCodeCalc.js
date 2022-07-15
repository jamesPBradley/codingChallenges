
//p: string
//r: num

function calc(str) {
    // get ascii char for each char in string, join them together to make a num
    let ascii = str.split('').map(element => +element.charCodeAt(0)); // array of ascii numbers
    let total1 = ascii.join(''); // string of nums
    // replace any instance of 7 in total1 with 1
    let total2 = ascii.join('').split('').map(element => element == 7 ? 1 : element).join(''); // string of nums
    // sum digits in total1, sum digits in total 2, return difference between the sums
    return total1.split('').reduce((accum, current) => accum + +current,0) - 
           total2.split('').reduce((accum, current) => accum + +current,0)
}

console.log(calc('abcdef')); // 6);
console.log(calc('ifkhchlhfd')); // 6); 
console.log(calc('aaaaaddddr')); // 30); 
console.log(calc('jfmgklf8hglbe')); // 6);  
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96);
