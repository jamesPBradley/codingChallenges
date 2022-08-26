//p: string
//r: string

function reverseWords(str) {
    return str
              // split the string into an array
              .split(' ')
              // iterate through the array, reversing each word
              .map(s=>s
                        .split('')
                        .reverse('')
                        .join(''))
              // join the array maintaining spaces
              .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');