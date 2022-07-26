//p: arr1, arr2
//r: arr

function arrayDiff(a,b) {
    // loop over a, removing the element if it exists in b
    return a.filter(num => b.includes(num) === false);

}


console.log(arrayDiff([1,2], [1])); // [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1])); // [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2])); // [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], [])); // [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), []); // "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2])); // [3], "a was [1,2,3], b was [1,2]")
