//p: string
//r: num

let FilterString = function(str) {
    // split the string into an array
    let arr = str.split('');
    // filter array for numbers included in variable holding nums as strings
    const nums = '0123456789'
    arr = arr.filter(e=>nums.includes(e));
    // make a string from the array and convert it to a num
    return +arr.join('')
}

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');