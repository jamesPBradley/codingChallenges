//p: array holding 5 arrays each with 5 nums
//r: array holding 5 arrays each with 5 nums

function matrix(arr) {
    // don't mutate input
    let input = [...arr];
    // check arrays at corresponding positions and swap nums
    for(let i=0; i<input.length; i++) {
        input[i][i] = input[i][i] < 0 ? 0 : 1; 
    }
    return input;
}


console.log(matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]]));
           //[[0, 4, -5, -9, 3], [6, 0, -7, 4, -5], [3, 5, 1, -9, -1], [1, 5, -7, 0, -9], [-3, 2, 1, -5, 1]]);

console.log(matrix([[-1, 4, -5, -9, 3],[6, 8, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 15, -9],[-3, 2, 1, -5, -6]]));
           //[[0, 4, -5, -9, 3],[6, 1, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 1, -9],[-3, 2, 1, -5, 0]]);

console.log(matrix([[-1, 4, -5, -9, 3, 8],[6, 8, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 15, -9, 3],[-3, 2, 1, -5, -6, 0],[8, 2, 0, -2, 4, -5]]));
           //[[0, 4, -5, -9, 3, 8],[6, 1, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 1, -9, 3],[-3, 2, 1, -5, 0, 0],[8, 2, 0, -2, 4, 0]]);

console.log(matrix([[1, 1, -5, 5],[2, -4, 11, 2],[3, 1, -1, 4],[2, -6, 8, 10]]));
           //[[1, 1, -5, 5],[2, 0, 11, 2],[3, 1, 0, 4],[2, -6, 8, 1]]);
