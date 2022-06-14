

//p: array
//r: boolean

let isMonotone = function(arr) {
    if(arr.length===0) {
        return true;
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }else {
            continue
        }
    }
    return true;
}

console.log(isMonotone([1,2,3])) // == true
console.log(isMonotone([1,1,2])) // == true
console.log(isMonotone([1])) //     == true
console.log(isMonotone([3,2,1])) // == false
console.log(isMonotone([3,2,2])) // == false