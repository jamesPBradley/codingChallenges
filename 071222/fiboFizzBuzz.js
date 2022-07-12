

//p: num
//r: array

function fibsFizzBuzz(n) {
    // create an array via loop where n is number of iterations
    let arr = [];
    for(let i=0; i<n; i++) {
        arr.push(arr[i-2]+arr[i-1] || 1);
    }
    // replace nums with strings via conditional
    return arr.map(val => {
        return val%3 === 0 && val%5 === 0 ? val = 'FizzBuzz' :
               val%3 === 0 ? val = 'Fizz' :
               val%5 === 0 ? val = 'Buzz' : val;
        }
    )
}

console.log(fibsFizzBuzz(2)) // [ 1, 1 ])
console.log(fibsFizzBuzz(5)) // [ 1, 1, 2, 'Fizz', 'Buzz' ])
console.log(fibsFizzBuzz(20)) // [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"])
