// p: number, number
// r: boolean

function lovefunc(n1,n2) {
    return n1%2===0 && n2%2===0 ? false :
           n1%2===0 && n2%2>0 ? true :
           n1%2>0 && n2%2===0 ? true : false;
}

console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)