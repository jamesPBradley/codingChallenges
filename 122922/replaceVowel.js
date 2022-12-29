// p: string
// r: string

// function replace(str) {
//     // create a variable holding vowels
//     // loop through string, copy consonants, add exclamations instead of vowels
//     const vowels = 'aeiou';
//     let result = '';
//     let lower = str.toLowerCase();
//     for(let i=0; i<lower.length; i++) {
//         result += vowels.includes(lower[i]) ? '!' : str[i];
//     }
//     return result;
// }

function replace(str) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for(let i=0; i<str.length; i++) {
        result += vowels.includes(str[i]) ? '!' : str[i];
    }
    return result;
}

console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")