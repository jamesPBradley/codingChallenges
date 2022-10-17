// p: array
// r: array

function removeSmallest(arr) {
    // dont mutate input
    let result = [...arr];
    // find index of min
    // splice away that index
    result.splice(result.indexOf(Math.min(...arr)),1)
    // return resulting array
    return result;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]), [], "Wrong result for []");