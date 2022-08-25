//p: string
//r: num

function getCount(str) {
    // create a variable holding the vowels
    const vowels = 'aeiou';
    let count = 0;
    // loop through the string, checking for vowels
    for(let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    // increase count every time a vowel is found
    return count;
}

console.log(getCount("abracadabra"), 5);
