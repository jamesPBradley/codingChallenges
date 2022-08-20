//p: strings
//r: string

function addLetters(...letters) {
    // variable holding letters
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // count indexes of each parameter in the string
    // account for empty array
    let position = letters.map(l=>alpha.indexOf(l)+1).reduce((a,c)=>a+c,0) || 26;
    // account for overflow
    while(position >= 27) {
        position -= alpha.length;
    }
    return alpha[position-1]
}

console.log(addLetters("k", "y", "k", "z", "b", "e", "y", "u", "s", "h")); // 'w'



// console.log(addLetters('a', 'b', 'c')); // = 'f'
// console.log(addLetters('a', 'b')); // = 'c'
// console.log(addLetters('z')); // = 'z'
// console.log(addLetters('z', 'a')); // = 'a'
// console.log(addLetters('y', 'c', 'b')); // = 'd' // notice the letters overflowing
// console.log(addLetters()); // = 'z'