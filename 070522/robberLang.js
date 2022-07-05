

//p: string
//r: string

function robberEncode(sentence) {
    let encoded = [];
    for(let char of sentence) {
      encoded.push(char);
      if("QWRTYPSDFGHJKLZXCVBNMqwrtypsdfghjklzxcvbnm".includes(char)) {
        encoded.push(char == char.toLowerCase() ? 'o' : 'O');
        encoded.push(char);
      }
    }
    return encoded.join('');
}

console.log(robberEncode("hello world")); // "hohelollolo wowororloldod");
console.log(robberEncode("coding is fun")); // "cocododinongog isos fofunon");
console.log(robberEncode("follow the white rabbit")); // "fofolollolowow tothohe wowhohitote rorabobbobitot");
console.log(robberEncode("S.O.S")); // "SOS.O.SOS");
