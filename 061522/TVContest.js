
//p: string
//r: array containing single string

function unscramble(scramble) {
    // split input into an array
    const array = scramble.split('');
    // check wordList for elements that contain each element from the input, add those elements to a new array
    let result = [];
  
    for(word in wordList) {
        if(wordList[word].length === array.length && 
           array.every(letter => wordList[word].includes(letter))) {
           result.push(wordList[word]);
        }
    }
    // if words are found, return the array. Otherwise, return undefined
    return result.length > 0 ? result : undefined;
}

console.log(unscramble("shi")) //, ['his']);
console.log(unscramble("nowk")) //, ['know']);
console.log(unscramble("amle")) //, ['male', 'meal']);
