// p: string
// r: num

function wordsToMarks(str) {
    // create variable holding alphabet
    const alphabet = '0abcdefghijklmnopqrstuvwxyz';
    let sum = 0;
    // create variable that holds a sum as you loop through the string
    for(let i=0; i<str.length; i++) {
        sum += alphabet.indexOf(str[i]);
    }
    // return the sum
    return sum;
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);