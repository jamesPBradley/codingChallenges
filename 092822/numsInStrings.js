//p: string
//r: num

function solve(str) {
    // create a variable storing nums
    const nums = '0123456789';
    // create an array storing characters that can be converted to nums and convert them
    let arr = str
                  .split('')
                  .map(s=>nums.includes(s) ? s : 'x')
                  .join('')
                  .split('x')
                  .map(s=>+s ? +s : 0);
    // find the maximum value in the array
    return Math.max(...arr);
}

console.log(solve('gh12cdy695m1'),695);
console.log(solve('2ti9iei7qhr5'),9);
console.log(solve('vih61w8oohj5'),61);
console.log(solve('f7g42g16hcu5'),42);
console.log(solve('lu1j8qbbb85'),85);