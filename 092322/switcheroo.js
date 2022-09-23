//p:string
//r: string

function vowel2index(str) {
    // create variable that holds vowels
    const vowels = 'aeiouAEIOU';
    // loop through string
    let result = '';
    for(let i=0; i<str.length; i++) {
        // create new string copying old string, replacing vowels with their index
        result += vowels.includes(str[i]) ? i+1 : str[i];
    }
    return result;
}

console.log(vowel2index('this is my string'),'th3s 6s my str15ng');
console.log(vowel2index('Codewars is the best site in the world'),'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
console.log(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
console.log(vowel2index(''), '');