//p: array
//r: array

function upArray(arr) {
    // input validation
    if(arr.some(num => num < 0 || num > 9) || arr.length === 0) {
        return null;
    }
    // don't mutate input
    let input = [...arr];
    let i = input.length-1;
    while(true) {
        // if all elements are 9, add an element to the array, end loop
        if(input.every(num => num === 9)) {
            input = input.map(num => 0);
            input.unshift(1);
            break;
        // if an element is nine, make it zero and check previous element
        }else if(input[i]===9) {
            input[i]=0;
            i--;
        // increase element by 1, end loop
        }else {
            input[i]++;
            break;
        }
    }
    // return array
    return input;
}



console.log(upArray([9,9,9]));
// console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7])); // [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]
// console.log(upArray([2,3,9])); // [2,4,0]);
// console.log(upArray([4,3,2,5])); // [4,3,2,6]);
// console.log(upArray([1,-9])); // null);