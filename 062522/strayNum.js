//p: array of nums
//r: num

function stray(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}


console.log(stray([1, 1, 2])) // 2);
