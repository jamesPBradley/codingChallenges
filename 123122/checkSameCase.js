// p: string, string
// r: number

function sameCase(a,b) {
    // create variable holding letters
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = lower.toUpperCase();
    const letters = `${lower}${upper}`
    // use conditional statement to return numbers based on comparison
    return letters.indexOf(a)==-1 || letters.indexOf(b)==-1 ? -1  : 
           [a,b].every(e=>lower.includes(e)===true) ? 1 :
           [a,b].every(e=>upper.includes(e)===true) ? 1 : 0;
}

console.log(sameCase('C', 'B'),1);
console.log(sameCase('b', 'a'),1);
console.log(sameCase('d', 'd'),1);
console.log(sameCase('A', 's'),0);
console.log(sameCase('c', 'B'),0);
console.log(sameCase('b', 'Z'),0);
console.log(sameCase('\t', 'Z'),-1);
console.log(sameCase('H', ':'),-1);