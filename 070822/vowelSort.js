

//p: string
//r: string

function sortVowels(str) {
    if(typeof str !== 'string') {
        return '';
    }
    // make array from string
    let input = [...str];
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    // add | and a line break to each element
    for(let i=0; i<input.length; i++) {
        if(i===input.length-1) {
            (vowels.includes(input[i])) ? input[i] = `|${input[i]}` : input[i] = `${input[i]}|`;
        }else {
            vowels.includes(input[i]) ? input[i] = `|${input[i]}\n` : input[i] = `${input[i]}|\n`;
        }
    }
    // return string
    return input.join('');
}

console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T')); // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
console.log(sortVowels(1337)); // '');
console.log(sortVowels(undefined)); // '');
