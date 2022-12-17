// p: string
// r: string

function getRealFloor(n) {
    return n>=13 ? n-2 :
           n>=1 ? n-1 : n;
}

console.log(getRealFloor( 1),  0);
console.log(getRealFloor( 5),  4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);