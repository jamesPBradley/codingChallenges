//p: string
//r: array

function capitals(word) {
    // place capital letters in a variable to check against
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexes = [];
    // loop through string and add indexes to variable when a capital is found in the string
    for(let i=0; i<word.length; i++) {
        if(caps.includes(word[i])) {
            indexes.push(i);
        }
    }
    // return the variable holding the indexes
    return indexes;
}

console.log(capitals('CodEWaRs'), [0,3,4,6] );
