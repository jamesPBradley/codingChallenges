//p: string
//r: string

// function firstNonRepeated(str) {
//     const arr = str.split('');
//     return arr.filter(char => arr.indexOf(char) === arr.lastIndexOf(char))[0] || null;
// } 

function firstNonRepeated(str) {
    return str
              .split('')
              .filter(char => str.split('').indexOf(char) === str.split('').lastIndexOf(char))
              [0] || null;
}


// console.log(firstNonRepeated("test")); // 'e'));
// console.log(firstNonRepeated("teeter")); // 'r'));
// console.log(firstNonRepeated("1122321235121222")); // '5'));
// console.log(firstNonRepeated("rend")); // 'r'));

console.log(firstNonRepeated("test")); // returns "e"
console.log(firstNonRepeated("teeter")); // returns "r"
console.log(firstNonRepeated("trend")); // returns "t" (all the characters are unique)
console.log(firstNonRepeated("aabbcc")); // returns null (all the characters are repeated)