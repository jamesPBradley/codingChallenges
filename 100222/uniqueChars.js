// p: strings
//r: string

function solve(s1,s2) {
    // find chars from s1 not in s2, add to empty variable
    let unique1 = s1.split('').filter(s=>s2.includes(s)===false);
    // find chars from s2 not in s1, add to variable
    let unique2 = s2.split('').filter(s=>s1.includes(s)===false);
    // return variable
    return unique1.concat(unique2).join('');
}

console.log(solve("xyab","xzca"),"ybzc");
console.log(solve("xyabb","xzca"),"ybbzc");
console.log(solve("abcd","xyz"),"abcdxyz");
console.log(solve("xxx","xzca"),"zca");