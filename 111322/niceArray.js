// p: array
// r: boolean

function isNice(arr) {
    // loop through array
    for(let i=0; i<arr.length; i++) {
    // if another element exists that is either 1 bigger or smaller, continue, otherwise return false
        if(arr.some(e=>e == arr[i]+1 || e == arr[i]-1)) {
            continue;
        }else {
            return false;
        }
    }
    // if the loop finishes, return true
    return arr.length ? true : false;
}


console.log(isNice([2,10,9,3]),true);
console.log(isNice([3,4,5,7]),false);
console.log(isNice([]),false);