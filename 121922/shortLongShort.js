// p: string, string
// r: string

function solution(a,b) {
    // assign each string to short or long variable
    let short = a.length < b.length ? a : b;
    let long = a.length > b.length ? a : b;
    // return short long short
    return `${short}${long}${short}`;
}

console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');