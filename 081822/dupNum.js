//p: arr
//r: num

function findDup(arr) {
    // find dup by checking first and last index match
    return arr.find(n => arr.indexOf(n)!==arr.lastIndexOf(n));
}

console.log(findDup([1,2,2,3])); // 2);
console.log(findDup([1,3,2,5,4,5,7,6])); // 5);