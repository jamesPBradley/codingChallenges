//p: arrays
//r: array

function combine(...arrays) {
    // determine total number of elements
    let totalElements = arrays.map(arr => arr.length).reduce((a,c) => a+c,0);
    // loop over array of arrays
    let result = [];
    let i=0;
    // continue to loop until all elements are placed in resulting array
    while(result.length<totalElements) {
        // look at each array, if an element exists at the specified index, push it to the resulting array
        arrays.forEach(arr => {
            if(arr[i]) {
                result.push(arr[i]);
            }
        })
        // increase the index
        i++
    }
    // return the array
    return result;
}


console.log(combine(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 4, 5]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])); //['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);
