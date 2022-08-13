//p: two integers
//r: num

function add(n1,n2) {
    // make nums strings
    let s1 = n1.toString();
    let s2 = n2.toString();
    // pad start with zeros so they match in length
    let long = s1.length > s2.length ? s1 : s2;
    let short = s1.length <= s2.length ? s1 : s2;
    if(short.length < long.length) {
        short = short.padStart(long.length,'0');
    }
    let arr1 = long.split('').map(n=>+n);
    let arr2 = short.split('').map(n=>+n);
    // add numbers and combine them into a single number
    // return number
    return +arr1.map((n,i) => arr1[i] + arr2[i]).join('');
}


console.log(add(2, 11)); // 13);
console.log(add(0, 1)); // 1);
console.log(add(0, 0)); // 0);
console.log(add(16, 18)); // 214);
console.log(add(26, 39)); // 515);
console.log(add(122, 81)); // 1103);
console.log(add(1222, 30277)); // 31499);
console.log(add(1236, 30977)); // 31111013);
console.log(add(38810, 1383)); // 391193);
console.log(add(49999, 49999)); // 818181818);
