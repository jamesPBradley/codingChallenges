// p: string
// r: string

function vowelOne(str) {
    return str
            // create an array
              .split('')
            // put 0's or 1's in array based on value at string index
              .map(e=>'aeiou'.includes(e.toLowerCase('')) ? 1 : 0)
            // return a string
              .join('');
}

console.log(vowelOne( "vowelOne" ), "01010101" );
console.log(vowelOne( "123, arou" ), "000001011" );