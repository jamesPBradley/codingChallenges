// p: array
// r: num

function stantonMeasure(arr) {
    // count number of 1's in the array, store in variable
    // let n = 0;
    // for(let i=0; i<arr.length; i++) {
    //     if(arr[i]===1) {
    //         n++
    //     }
    // }
    const n = arr.filter(e=>e===1).length;
    // return number of times variable value appears in input
    return arr.filter(e=>e===n).length;
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]),3);
console.log(stantonMeasure([12,1,-2,1,5,1,-4,1,10,1,-15,1]),0);