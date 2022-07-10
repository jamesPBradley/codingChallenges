//p : array, string
//r: string

function missingWord(arr,str) {
    const indexes = [...arr].sort((a,b) => a-b);
    const clue = str.split(' ').join('').split('')
    let result = [];
    for(let i=0; i<indexes.length; i++) {
        if(indexes[i] > clue.length) {
            result = [];
            break;
        }
        result.push(clue[indexes[i]]);
    }
    return result.length ? result.join('').toLowerCase() : 'No mission today';
}


console.log(missingWord([5, 0, 3], "I love you")) // "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")) // "bay")
console.log(missingWord([12, 4, 6], "Good Morning")) // "No mission today")
