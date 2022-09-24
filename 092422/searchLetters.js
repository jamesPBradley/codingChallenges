//p: string
//r: string

function change(str) {
    // make a variable holding alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // create an empty variable to store resulting string
    let result = '';
    // loop through alphabet, adding to result based on element inclusion in new string
    for(let i=0; i<alphabet.length; i++) {
        result += str.toLowerCase().includes(alphabet[i]) ? 1 : 0;
    }
    // return result
    return result;
}

console.log( change("a **&  bZ"), "11000000000000000000000001" );
