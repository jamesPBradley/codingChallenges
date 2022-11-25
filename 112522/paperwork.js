// p: number number
// r: number

function paperwork(n1,n2) {
    // multiply inputs together and return the product
    // if either input is negative, return 0
    return n1 < 0 || n2<0 ? 0 : n1*n2;
}

console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');