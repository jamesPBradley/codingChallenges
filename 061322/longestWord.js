// p: array
// r: number

// function longest(words) {
//     const lengths = words.map(word => word.length)
//     return Math.max(...lengths);
// }

function longest(words) {
    return Math.max(...words.map(word => word.length));
}

console.log(longest(['simple', 'is', 'better', 'than', 'complex']));  //, 7);
console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']));  //, 8);
console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']));  //, 9);
