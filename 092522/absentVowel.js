//p: string
//r: num

function absentVowel(str) {
    // create variable holding vowels
    const vowels = ['a','e','i','o','u'];
    for(let i=0; i<vowels.length; i++) {
        // find the vowel that does not exist in the array
        if(str.includes(vowels[i])===false) {
            // return the index (in the vowels array) of the nonexistant vowel
            return vowels.indexOf(vowels[i]);
        }
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);