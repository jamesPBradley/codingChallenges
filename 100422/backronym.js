// p: str
// r: str



function makeBackronym(str){
    // create empty variable to hold new string
    let result = '';
    // create uppercase input
    let input = str.toUpperCase();
    // loop through uppercase var running each character through the dictionary
    for(let i=0; i<input.length; i++) {
        // accomodate for the last character
        i === input.length-1 ? 
        result += `${dict[input[i]]}` : 
        result += `${dict[input[i]]} `;
    }
    // return the resulting string
    return result
};

// need preloaded variable from codewars to test