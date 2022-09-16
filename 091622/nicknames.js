//p: string
//r: string

function nicknameGenerator(str) {
    // create var containing vowels
    const vowels = 'aeiou'
    // check length of string
    return str.length < 4 ? 'Error: Name too short' : 
        // create conditional determining 3 or 4 letter return value length
           vowels.includes(str[2]) ? str.substring(0,4) : str.substring(0,3)
}

console.log(nicknameGenerator("Jimmy"), "Jim");
console.log(nicknameGenerator("Samantha"), "Sam");
console.log(nicknameGenerator("Sam"), "Error: Name too short");
console.log(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
console.log(nicknameGenerator("Melissa"), "Mel");
console.log(nicknameGenerator("James"), "Jam");