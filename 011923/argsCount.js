// p: anything
// r: number

function args_count(...params) {
    return params.length;
}


console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(["foo", "bar"]), 1);