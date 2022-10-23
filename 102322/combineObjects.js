// p: two objects
// r: one object

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

// function combine(a,b) {
//     let keysB = Object.keys(b);
//     let result = Object.assign({},a);
//     for(let k of keysB) {
//         if(k in result) {
//             result[k] += b[k];
//         }else {
//             result[k] = b[k];
//         }
//     }
//     return result;
// }

function combine(...input) {
    // variable holding combined object
    let result = Object.assign({},input[0]);
    // loop through input
    for(let i=1; i<input.length; i++) {
        // create variable holding each elements keys
        let keys = Object.keys(input[i]);
        // iterate through each element
        for(let k of keys) {
            // if the key exists in the combined object, increase
            if(k in result) {
                result[k] += input[i][k];
            // if the key does not exist in the combined object, create it and set value equal to value from input
            }else {
                result[k] = input[i][k];
            }
        }
    }
    // return the combined object
    return result;
}


console.log(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
console.log(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
console.log(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
console.log(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
console.log(combine({}, {}, {}), {})
console.log(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })