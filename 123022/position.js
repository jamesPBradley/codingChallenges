// p: string
// r: string

function position(letter) {
    // create vowel that holds alphabet string
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    // return index +1 of parameter in alphabet string
    return `Position of alphabet: ${letters.indexOf(letter)+1}`;
}

console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");