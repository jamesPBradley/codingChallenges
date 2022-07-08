//p: string
//r: num

function countConsonants(str) {
    // set str to lowerCase
    let input = str.toLowerCase();
    // create consonants variable
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let result = [];
    //iterate through input
    for(let i=0; i<input.length; i++) {
        //if consonants variable includes item and result does not, add it to result
        if(consonants.includes(input[i]) && result.includes(input[i]) === false) {
            result.push(input[i]);
        }
    }
    //return result variable length
    return result.length;
}

console.log(countConsonants("SSSsillystring")); // 7, "do not count duplicate consonants!")
console.log(countConsonants("add")); // 1, "do not count duplicate consonants!")
console.log(countConsonants("Dad")); // 1, "do not count duplicate consonants!")
console.log(countConsonants("aeiou")); // 0, 
console.log(countConsonants("sillystring")); // 7, 
console.log(countConsonants("abcdefghijklmnopqrstuvwxyz")); // 21
console.log(countConsonants("Count my unique consonants!!")); // 7
