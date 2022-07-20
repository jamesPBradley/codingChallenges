// p: array of strings
// r: array


function shiritori(words) {
    // check array contents
    if(words.length === 0) {
        return [];
    }
    // build new array of words meeting conditions
    let result = [];
    for(let i=0; i<words.length; i++) {
        // end loop if a word does not meet conditions
        if(words[i] === '') {
            break;
        // add first word
        }else if(i===0) {
            result.push(words[i]);
        // add words that meet the condition
        }else if(words[i][0] === words[i-1][words[i-1].length-1]) {
                result.push(words[i]);
        // end loop if a word does not meet conditions
        }else {
            break;
        }
    }
    // return array
    return result;
}



console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"])); // ["dog","goose","elephant","tiger","rhino","orc","cat"]
console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"])); // ["dog","goose"]
console.log(shiritori([])); // []
console.log(shiritori(["","","","","",""])); // []
console.log(shiritori(["ab","bc","","de","","",""])); // ["ab","bc"]
