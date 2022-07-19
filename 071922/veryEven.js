//p: num
//r: boolean

function isVeryEvenNumber(n) {
    // make num an array
    let sum = n.toString().split('');
    // handle nums that have multiple digits
    while(sum.length > 1) {
        sum = sum
                 .reduce((acc, c) => acc + c,0)
                 .toString()
                 .split('')
                 .map(element => +element);
    }
    // is the final number even?
    return sum[0]%2 === 0;
}

const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];

console.log(isVeryEvenNumber(inputs[0])); // true
console.log(isVeryEvenNumber(inputs[1])); // true
console.log(isVeryEvenNumber(inputs[2])); // false
console.log(isVeryEvenNumber(inputs[3])); // true
console.log(isVeryEvenNumber(inputs[4])); // false
console.log(isVeryEvenNumber(inputs[5])); // false
console.log(isVeryEvenNumber(inputs[6])); // false
console.log(isVeryEvenNumber(inputs[7])); // false
console.log(isVeryEvenNumber(inputs[8])); // false
console.log(isVeryEvenNumber(inputs[9])); // true
console.log(isVeryEvenNumber(inputs[10])); // true
