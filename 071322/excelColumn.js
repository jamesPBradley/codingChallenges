
//p: string
//r: num

function titleToNumber(title) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = 0;
    const letters = title.split('').reverse().join('');
    for (let i = 0; i < letters.length; i++) {
      const index = alphabet.indexOf(letters[i]) + 1;
  
      result += 26 ** i * index;
    }
  
    return result;
}


console.log(titleToNumber('A')) // 1);
console.log(titleToNumber('Z')) // 26);
console.log(titleToNumber('AA')) // 27);
console.log(titleToNumber('AZ')) // 52);
console.log(titleToNumber('BA')) // 53);
console.log(titleToNumber('CODEWARS')) // 28779382963);
