//p: string
//r: string

function explode(str) {
    // loop over string, creating a new string with repeat based on chars from input
    let result = '';
    for(let i=0; i<str.length; i++) {
        result += str[i].repeat(+str[i]);
    }
    return result;
}

console.log(explode("312"), "333122");
console.log(explode("102269"), "12222666666999999999");
console.log(explode("0"), "");
console.log(explode("000"), "");
console.log(explode("123"), "122333");