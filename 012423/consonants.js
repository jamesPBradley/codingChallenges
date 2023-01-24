// p: string
// r: number

function consonantCount(str) {
    // set parameter to lowercase
    const lower = str.toLowerCase();
    // create variable holding consonants
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    // create count variable
    let count = 0;
    // loop through string
    for(let i=0; i<lower.length; i++) {
        // if consonants variable includes string element, increase count
        if(consonants.includes(lower[i])) {
            count++;
        }
    }
    // return count
    return count;
}

console.log(consonantCount(''), 0, 'Test string is empty string');
console.log(consonantCount('aaaaa'), 0, 'Test string: "aaaaa"');
console.log(consonantCount('XaeiouX'), 2, 'Test string: "XaeiouX"');
console.log(consonantCount('Bbbbb'), 5, 'Test string: "Bbbbb"');
console.log(consonantCount('helLo world'), 7, 'Test string: "helLo world"');
console.log(consonantCount('h^$&^#$&^elLo world'), 7, 'Test string: "h^$&^#$&^elLo world"');
console.log(consonantCount('0123456789'), 0, 'Test string: "0123456789"');
console.log(consonantCount('012345_Cb'), 2, 'Test string: "012345_Cb"');
