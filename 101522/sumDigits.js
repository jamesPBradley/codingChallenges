//p: num
//r: num

function sumDigits(n) {
    return Math.abs(n).toString().split('').reduce((a,c)=>a+ +c,0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);