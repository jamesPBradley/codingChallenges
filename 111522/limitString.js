// p: string, number
// r: string

function solution(str,limit) {
    // check string length, return the amount of chars equal to the limit, otherwise return the string
    return str.length > limit ? `${str.slice(0,limit)}...` : str;
}


console.log(solution('Testing String', 3));// --> 'Tes...'
console.log(solution('Testing String', 8));// --> 'Testing ...'
console.log(solution('Test', 8));//           --> 'Test'