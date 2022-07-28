//p: array of integers
//r: integer

function findEvenIndex(arr) {
    // loop through arr
    for(let i=0; i<arr.length; i++) {
        // left variable sums nums to left of index exclusively. right variable is sum of everything right of the index exclusively
        let right = arr.slice(i+1).reduce((a,c) => a+c,0);
        let left = arr.reduce((a,c) => a+c,0) - right - arr[i];
        // compare variables, if they match return index
        if(left === right) {
            return i;
        }
    }
    // if they never match, return -1
    return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1])); //3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1])); //1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6])); //-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35])); //3, "The array was: [20,10,30,10,10,15,35] \n");
