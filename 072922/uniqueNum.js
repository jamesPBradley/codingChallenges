//p: array
//r: num

function findUniq(arr) {
    // reduce array size
    let small = [...new Set(arr)];
    // return the unique element
    return arr.indexOf(small[0]) === arr.lastIndexOf(small[0]) ? small[0] : small[1];
}


console.log(findUniq([ 1, 0, 0 ])); // 1);
console.log(findUniq([ 0, 1, 0 ])); // 1);
console.log(findUniq([ 0, 0, 1 ])); // 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10);
