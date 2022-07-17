
//p: two positive integers
//r: num

function mygcd(n1,n2) {
    const small = Math.min(n1,n2);
    const large = Math.max(n1,n2);
    if(large%small===0) {
        return small;
    }

    let commonDivisors = [];

    for(let i=1; i<=small; i++) {
        if(small%i===0 && large%i===0) {
            commonDivisors.push(i);
        }
    }
    return Math.max(...commonDivisors);
}


console.log(mygcd(30,12)) //6)
console.log(mygcd(8,9))   //1)
console.log(mygcd(1,1))   //1)
