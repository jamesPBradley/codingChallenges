// p: string
// r: array

function vowelIndices(str) {
    // create variable holding vowels for comparison
    const vowels = 'aeiouy';
    // create empty array
    let result = [];
    // loop through string
    for(let i=0; i<str.length; i++) {
        // if an element exists in the vowel array, add its position to the empty array + 1
        if(vowels.includes(str.toLowerCase()[i])) {
            result.push(i+1);
        }
    }
    // return the array
    return result;
}


console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1,5]);
console.log(vowelIndices("super"), [2,4]);
console.log(vowelIndices("orange"), [1,3,6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);