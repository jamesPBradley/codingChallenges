//p: num
//r: string

function solution(n) {
    // pad number until it is a five digit number then return a string
    return `Value is ${n.toString().padStart(5,0)}`;
}


console.log(solution(5),"Value is 00005")
console.log(solution(1204),"Value is 01204")
console.log(solution(109),"Value is 00109")
console.log(solution(0),"Value is 00000")