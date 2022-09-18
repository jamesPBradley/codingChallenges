//p: string
//r: string

function disemvowel(str) {
    // create variable storing vowels
    const vowels = 'aeiouAEIOU';
    // build new string from existing string, skipping any vowels
    let result = '';
    for(let i=0; i<str.length; i++) {
        if(vowels.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    // return the new string
    return result;
}

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")