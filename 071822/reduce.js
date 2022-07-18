

//p: array
//r: array

function reduce(fraction) {
    // find common factors
    let commonFactors = [];
    for(let i=1; i<=Math.max(...fraction); i++) {
        if(fraction[0]%i===0 && fraction[1]%i===0) {
            commonFactors.push(i);
        }
    }
    // divide each element by gcf
    // return array
    return fraction.map(element => element/Math.max(...commonFactors))
}


console.log(reduce([60, 20])); //[3, 1]
console.log(reduce([80, 120])); //[2,3]
console.log(reduce([4, 2])); //[2, 1]
console.log(reduce([45,120])); //[3,8]
console.log(reduce([1000,1])); //[1000,1]
console.log(reduce([1,1])); //[1,1]
