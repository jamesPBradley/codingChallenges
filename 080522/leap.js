//p: num
//r: boolean

function isLeapYear(n) {
    return n%400===0 ? true :
           n%100===0 ? false :
           n%4===0 ? true : false;
}


console.log(isLeapYear(1234)); // false, 'Year 1234');
console.log(isLeapYear(1984)); // true, 'Year 1984');
console.log(isLeapYear(2000)); // true, 'Year 2000');
console.log(isLeapYear(2010)); // false, 'Year 2010');
console.log(isLeapYear(2013)); // false, 'Year 2013');
