// P: array
// r: number

function getMissingElement(arr) {
    // create a variable holding numbers 0 to 9
    const nums = [0,1,2,3,4,5,6,7,8,9];
    // loop through the variable
    for(let i=0; i<nums.length; i++) {
        // if the input does not include the element, return it
        if(arr.includes(nums[i])===false) {
            return nums[i];
        }
    }
}


console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);