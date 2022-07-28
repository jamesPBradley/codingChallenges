

//p: string
//r: string

function shortForm(str) {
    const vowels = 'AEIOUaeiou';
    let result = '';
    for(let i=0; i<str.length; i++) {
        if(i===0 || i===str.length-1) {
            result += str[i];
        }else if(vowels.includes(str[i]) === false) {
            result += str[i];
        }
    }
    return result;
}


console.log(shortForm("assault")); // "asslt");
