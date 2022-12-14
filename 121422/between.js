// p: number, number
// r: array

function between(n1,n2) {
    let result = [];
    for(let i=n1; i<=n2; i++) {
        result.push(i);
    }
    return result;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);