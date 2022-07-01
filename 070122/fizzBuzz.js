//p: num
//r: array

// function fizzBuzz(n) {
//     let result = [];
//     for(let i=1; i<=n; i++) {
//         if(i%5 === 0 && i%3 === 0) {
//             result.push('FizzBuzz');
//         }else if(i%3 === 0) {
//             result.push('Fizz');
//         }else if(i%5 === 0) {
//             result.push('Buzz');
//         }else {
//             result.push(i);
//         }
//     }
//     return result;
// }

function fizzBuzz(n) {
    let result = [];
    for(let i=1; i<=n; i++) {
        i%5 === 0 && i%3 === 0 ? result.push('FizzBuzz') : 
        i%3 === 0 ? result.push('Fizz') :
        i%5 === 0 ? result.push('Buzz') :
        result.push(i);
    }
    return result;
}


console.log(fizzBuzz(3)); // -->  [1, 2, "Fizz"])