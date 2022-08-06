
//p: num, can be negative
//r: num


function solution(n) {
    let sum = 0;
    //loop through numbers below n
    for(let i=0; i<n; i++) {
    // if any are divisible by 3 or 5, add them
    // if they are divisible by both, only add them once
        sum += i%3===0 || i%5===0 ? i : 0;
    }
    // if number is negative, return 0
    return sum < 0 ? 0 : sum;
}



console.log(solution(10)); //23
