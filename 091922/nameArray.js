//P: array
//r: array

function capMe(arr) {
    // iterate through the array creating elements with a cap letter and slice the remainder of the name
    return arr.map(n=>`${n[0].toUpperCase()}${n.toLowerCase().substring(1,n.length)}`);
}

console.log(capMe(['jo', 'nelson', 'jurie']))     // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']