
//p: string
//r: string

function getMiddle(str) {
    // check str length
    const mid = str.length/2;
    // if odd return midpoint rounded down. if even, return str[i] and str[i-1]
    return mid%1>0 ? str[Math.floor(mid)] : `${str[mid-1]}${str[mid]}`;
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");
