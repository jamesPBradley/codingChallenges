//p: string, string
//r: boolean

function solution(str1,str2) {
    // check if the last number of digits in first string match second string
    return str1.slice(str1.length-str2.length) === str2;
}

console.log(solution('samurai', 'ai'), true)

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)