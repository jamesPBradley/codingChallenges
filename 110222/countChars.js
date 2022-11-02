//p: string
//r: array

function orderedCount(str) {
    // make an array of unique letters
    let letters = [...new Set(str.split(''))].map(e=>[e]);
    // loop through the array
    for(let i=0; i<letters.length; i++) {
        // filter original string for that character
        // count the length of that array
        let count = str.split('').filter(e=>e==letters[i][0]).length;
        // add that number to the element
        letters[i].push(count);
    }
    // return array
    return letters;
}

console.log(orderedCount("abracadabra")) //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
console.log(orderedCount("Code Wars")) //[['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
console.log(orderedCount("233312")) //[['2', 2], ['3', 3], ['1', 1 ]]);