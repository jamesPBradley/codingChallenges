

//p: two numbers
//r: number

function getSum(a,b) {
    let input = [a,b].sort();
    let sum = 0;
    for(let i=Math.min(...input); i<=Math.max(...input); i++) {
        sum += i;
    }
    return sum;
}


console.log(getSum(0,-1)) //,-1);
console.log(getSum(0,1)) //,1);
console.log(getSum(-1,2)) //,1);
