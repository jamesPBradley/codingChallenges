//p: array
//r: num

// function sumNested(arr) {
//     // loop through array, check each element. If the element is an array, make it a num
//     // for(let i=0; i<arr.length; i++) {
//     //     if(typeof arr[i] !== 'number') {
//     //         arr
//     //     }
//     // }
//     return arr.join('').split('').map(element => +element || 0).reduce((a,c) => a+c,0)
//     return arr.map(element => Array.isArray(element) ? element.join(' ') : element)
//     return arr.map(element => typeof element !== 'number' ? element.join('') : element)

// }

function sumNested(arr) {
    return arr.reduce((a, b) => a + (Array.isArray(b) ? sumNested(b) : b), 0);
}

console.log(sumNested([1])); // 1);
console.log(sumNested([1, 2, 3, 4])); // 10);
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55);
console.log(sumNested([])); // 0);
console.log(sumNested([[1], []])); // 1);
console.log(sumNested([[1, 2, 3, 4]])); // 10);
console.log(sumNested([1, [1], [[1]], [[[1]]]])); // 4);
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]])); // 8);
console.log(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []])); // 0);
