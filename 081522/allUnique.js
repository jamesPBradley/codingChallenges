
//p: string
//r: boolean

function hasUniqueChars(s) {
    const arr = s.split('');
    return arr.every(e => arr.indexOf(e) === arr.lastIndexOf(e));
}


console.log(hasUniqueChars("  nAa")); //false) // because there are two spaces ' '
console.log(hasUniqueChars("abcdef")); //true)
console.log(hasUniqueChars("aA")); //true) // case - sensitivity
console.log(hasUniqueChars("++-")); //false) // because there are two '+'
