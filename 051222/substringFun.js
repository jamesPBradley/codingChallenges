// function nthChar(words) {
//     let result = '';
//     for(let i=0; i<words.length; i++) {
//         result += words[i][i];
//     }
//     return result;
// }

function nthChar(words) {
    let result = '';
    words.forEach((word,index) => result += word[index]);
    return result;
}

console.log(nthChar([]));
console.log(nthChar(['yoda', 'best', 'has']));
