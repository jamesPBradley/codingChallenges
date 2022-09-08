//p: string
//r: string

function switcheroo(str) {
    // loop through input, build a new string based on each character from the input
    let result = [];
    for(let i=0; i<str.length; i++) {
        str[i]==='a' ? result.push('b') :
        str[i]==='b' ? result.push('a') :
        result.push('c');
    }
    return result.join('');
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc'); 