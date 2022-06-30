

//p: array
//r: array

function ultimateReverse(array) {
    // make an array of all letters in reverse order
    let letterArray = [...array].join('').split('').reverse('');
    // an array of the number of characters in each position of the original array
    let elLengths = array.map(element => element.length);

    // grab letters from the letterArray in the amounts specified from elLengths and add them to the result array
    let result = [];
    for(let i = 0; i<elLengths.length; i++) {
        result.push(letterArray.splice(0,elLengths[i]).join(''));
    }
    return result;
}


console.log(
      ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))
      //["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
    
console.log(
      ultimateReverse(
        ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]))
      //["How", "many", "shrimp", "do", "you", "have", "to", "eat","before", "your", "skin", "starts", "to", "turn", "pink?"]
