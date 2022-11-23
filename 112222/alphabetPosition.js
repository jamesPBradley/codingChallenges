// p: string
// r: string

// function alphabetPosition(str) {
//     // create a variable holding each letter of alphabet
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     // create an array holding only the characters contained in alphabet variable
//     let letters = str.toLowerCase().split('').filter(e=>alphabet.includes(e));
//     // return string with each elements index +1
//     return letters.map(e=>alphabet.indexOf(e) + 1).join(' ');
//     // return letters.map(e=>`${alphabet.indexOf(e) + 1}`).join(' ');
// }

function alphabetPosition(str) {
    // create a variable holding each letter of alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // create an array holding only the characters contained in alphabet variable
    return str
               .toLowerCase()
               .split('')
               .filter(e=>alphabet.includes(e))
                // return string with each elements index +1
               .map(e=>alphabet.indexOf(e) + 1)
               .join(' ');
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");