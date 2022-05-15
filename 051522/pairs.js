// P : array of non negative numbers or empty array
// R : total number of pairs


function duplicates(array) {
    // count each instance of a number
    let instances = array.reduce((obj, key) => {
        if(key in obj) {
            obj[key]++;
        }else {
            obj[key] = 1;
        }
        return obj;
    },{})

    // place counts in array
    let countsArr = [];
    for(let key in instances) {
        instances[key] % 2 === 0 ? 
        countsArr.push(instances[key]) : 
        countsArr.push(instances[key]-1);
    }

    // count all the pairs
    return countsArr.reduce((accum, current) => accum + (current/2),0);
}



console.log(duplicates([1, 2, 5, 6, 5, 2])) // 2
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])) // 4
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])) // 3
console.log(duplicates([1000, 1000])) // 1
console.log(duplicates([])) // 0
console.log(duplicates([54])) // 0
