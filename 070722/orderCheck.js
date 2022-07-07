//p: array
//r: boolean

function inAscOrder(arr) {
    let input = [...arr];
    for(let i=1; i<input.length; i++) {
        if(input[i]-input[i-1] < 0) {
            return false;
        }
    }
    return true;
}

// function inAscOrder(arr) {
//     return arr.filter((element, index) => arr[index] - arr[index+1] > 0).length === 0;
// }


console.log(inAscOrder([1, 2, 4, 7, 19])); // 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5])); // 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');

