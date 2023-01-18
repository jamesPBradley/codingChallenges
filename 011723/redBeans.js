// p: number
// r: number

function countRedBeads(n) {
    return n>2 ? n*2-2 : 0;
}

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);