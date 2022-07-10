//p: two arrays
//r: array

function diff(a, b) {
    // remove dups and prevent input mutation
    const aSet = [...new Set(a)];
    const bSet = [...new Set(b)];
    // variable to return
    let difference = [];
    // loop over each set checking for differences
    for(let i=0; i<aSet.length; i++) {
        if(bSet.includes(aSet[i]) === false) {
            difference.push(aSet[i]);
        }
    }
    for(let i=0; i<bSet.length; i++) {
        if(aSet.includes(bSet[i]) === false) {
            difference.push(bSet[i]);
        }
    }
    // return sorted difference array
    return difference.sort();
}

console.log(diff(["a","b"], ["a","b"])) // []
console.log(diff(["a","b"], [])) // ["a","b"]
console.log(diff([],["a","b"])) // ["a","b"]
console.log(diff([],[])) // []
console.log(diff(["a","b","z"],["a","b"])) // ["z"]
console.log(diff(["a","b","z","d","e","d"],["a","b","j","j"])) // ["d","e","j","z"]