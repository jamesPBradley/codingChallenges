

//p: num
//r: num

function palindromeChainLength(n) {
    let input = n;
    // flip the parameter
    let flip = +input.toString().split('').reverse().join('');
    let steps = 0;
    // if n is a palindrome, return 0
    if(+n.toString().split('').reverse().join('') === n) {
        return steps;
    }
    // if not is not a palindrome, add flip to the starting number and update the flip
    while(flip !== input) {
        input += flip;
        flip = +input.toString().split('').reverse().join('');
        // count each iteration
        steps++;
    }
    // return the number of steps taken
    return steps;
}

// console.log(palindromeChainLength(1)); //  0);
// console.log(palindromeChainLength(88)); // 0);    
console.log(palindromeChainLength(87)); // 4);
console.log(palindromeChainLength(89)); // 24);
console.log(palindromeChainLength(10)); // 1);